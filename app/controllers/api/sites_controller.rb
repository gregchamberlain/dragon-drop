class Api::SitesController < ApplicationController

	before_action :find_site, only: [:show, :destroy, :update]
	before_action :authorize

	def index
		render json: current_user.sites
	end

	def update
		if @site.update(site_params)
			render json: @site.to_json(include: {pages: {include: :components } } )
		else
			render json: @site.errors.full_messages
		end
	end

	def create
		@site = current_user.sites.new(site_params);
		@site.pages.new(name: 'Home', path: '/');
		if @site.save
			render json: @site.to_json(include: :pages)
		else
			render json: @site.errors
		end
	end

	def show
		@site = Site.includes(pages: :components).find(params[:id])
		render json: @site.to_json(include: {pages: {include: :components } } )
	end

	def destroy
		if @site.destroy
			render json: @site
		else
			render json: @site.errors.full_messages
		end
	end

	private
	def find_site
		@site = Site.find(params[:id])
		if @site.user != current_user
			render json: ["You don't have permissions for this site"], status: 403
		end
	end

	def site_params
		params.require(:site).permit(:name, :identifier)
	end

end
