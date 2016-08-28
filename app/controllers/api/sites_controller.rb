class Api::SitesController < ApplicationController

	before_action :find_site, only: [:show]

	def index
		render json: Site.all
	end

	def create
	end

	def show
		@site = Site.includes(:pages).find(params[:id])
		render json: @site.to_json(include: :pages)
	end

	private
	def find_site
		@site = Site.find(params[:id])
	end
end
