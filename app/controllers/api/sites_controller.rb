class Api::SitesController < ApplicationController
	def index
		render json: Site.all
	end

	def create
	end
end
