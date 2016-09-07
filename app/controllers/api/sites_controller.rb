class Api::SitesController < ApplicationController

	before_action :find_site, only: [:destroy, :update]
	# before_action :authorize

	def index
		@sites = current_user.sites
		render 'index'
	end

	def update
		if @site.update(site_params)
			# render json: @site.to_json(include: { pages: {include: :components } } )
			render 'show'
		else
			render json: @site.errors.full_messages, status: 400
		end
	end

	def create
		@site = current_user.sites.new(site_params);
		if @site.save
			# render json: @site.to_json(include: :pages)
			render 'show'
		else
			render json: @site.errors.full_messages, status: 400
		end
	end

	def show
		@site = Site.includes(pages: :components).find_by_identifier(params[:id])
		# render json: @site.to_json(include: {pages: {include: :components } } )
		render 'show'
	end

	def destroy
		storage = Fog::Storage.new({
		  provider: 'AWS',
		  aws_access_key_id: ENV["AWS_KEY"],
		  aws_secret_access_key: ENV["AWS_SECRET"],
			region: "us-west-1",
			path_style: true
		})
		bucket_name = "#{params[:id]}.dragon-drop.com"
		bucket = storage.directories.get(bucket_name);
		if bucket
			storage.delete_multiple_objects(bucket_name, bucket.files.map(&:key))
			storage.delete_bucket(bucket_name)
		end
		if @site.destroy
			render json: @site
		else
			render json: @site.errors.full_messages, status: 400
		end
	end

	def deploy
		@site = Site.includes(pages: :components).find_by_identifier(params[:id])
		json_site = @site.to_json(include: {pages: {include: :components } } );
		json_data = "window.data = {\"site\": #{json_site} }"
		storage = Fog::Storage.new({
		  provider: 'AWS',
		  aws_access_key_id: ENV["AWS_KEY"],
		  aws_secret_access_key: ENV["AWS_SECRET"],
			region: "us-west-1",
			path_style: true
		})
		bucket_name = "#{params[:id]}.dragon-drop.com"
		bucket = storage.directories.get(bucket_name)
		unless bucket
			bucket = storage.directories.create(
			  key: bucket_name, # globally unique name
			  public: true,
				location: "us-west-1"
			)
			bucket.files.create(
			  key: 'index.html',
			  body: File.open("static/index.html"),
			  public: true
			)
			bucket.files.create(
			  key: 'bundle.js',
			  body: File.open("static/bundle.js"),
			  public: true
			)
			bucket.files.create(
			  key: 'styles.css',
			  body: File.open("static/styles.css"),
			  public: true
			)
			storage.put_bucket_website(bucket_name, IndexDocument: "index.html", ErrorDocument: "index.html")
			storage.put_bucket_policy(bucket_name, {Version:"2012-10-17",Statement:[{Sid:bucket_name,Effect:"Allow",Principal:"*",Action:"s3:GetObject",Resource:"arn:aws:s3:::#{bucket_name}/*"}]})
		end
		bucket.files.create(
			key: 'data.js',
			body: json_data,
			public: true
		)
		@site.deployed = Time.now
		if @site.save
			render 'show'
		else
			render json: site.errors.full_messages, status: 400
		end
	end

	private
	def find_site
		@site = Site.find_by_identifier(params[:id])
		if @site.user != current_user
			render json: ["You don't have permissions for this site"], status: 403
		end
	end

	def site_params
		params.require(:site).permit(:name, :description, :identifier, :template)
	end

end
