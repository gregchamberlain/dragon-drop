class Api::ViewsController < ApplicationController

  def view
    @view = View.new
    p params
    @view.site_id = params[:site_id] if params[:site_id]
    @view.page_id = params[:page_id] if params[:page_id]
    if @view.save
      render json: @view
    else
      render json: @view.errors.full_messages
    end
  end
end
