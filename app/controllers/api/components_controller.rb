class Api::ComponentsController < ApplicationController

  def create
    page = Page.find_by(id: params[:page_id]);
    return render json: ["Page does not exist"], status: 404 unless page
    @component = page.components.new(component_params)
    if @component.save
      render json: @component
    else
      render json: @component.errors.full_messages, status: 400
    end
  end

  def destroy
    @component = Component.find_by(id: params[:id]);
    if @component.destroy
      render json: @component
    else
      render json: @component.errors.full_messages, status: 400
    end
  end

  private
  def component_params
    params.require(:component).permit(:name, :layout, :props).tap do |wl|
      wl[:props] = params[:component][:props]
      wl[:layout] = params[:component][:layout]
    end
  end
end
