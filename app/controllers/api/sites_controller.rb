class Api::SitesController < ApplicationController
	def index
		render json: Site.include(pages: :components).all
	end

	def create
	end
end
