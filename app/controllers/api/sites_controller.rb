class Api::SitesController < ApplicationController

	before_action :find_site, only: [:show]

	def index
		render json: Site.all
	end

	def create
		@site = Site.new(site_params);
		@site.user_id = 1
		@site.pages.new(name: 'Home', path: '/')
		@site.identifier = Site.generateUniqueIdentifier(@site.name);
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

	private
	def find_site
		@site = Site.find(params[:id])
	end

	def site_params
		params.require(:site).permit(:name, :identifier)
	end

end
