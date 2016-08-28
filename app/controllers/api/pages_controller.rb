class Api::PagesController < ApplicationController

  def index
    render json: Page.where('site_id': params[:site_id]);
  end

  def create
  end

end
