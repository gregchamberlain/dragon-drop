class Api::LayoutsController < ApplicationController

  def index
    render json: Layout.all
  end

  def create
    @layout = Layout.new(layout_params)
    if @layout.save
      render json: @layout
    else
      render json: @layout.errors, status: 500
    end
  end

  private
  def layout_params
    params.require(:layout).permit(:name, :data)
  end
end
