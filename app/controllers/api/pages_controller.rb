class Api::PagesController < ApplicationController

  def index
    render json: Page.where('site_id': params[:site_id]);
  end

  def create
    site = Site.find(params[:site_id])
    @page = site.pages.new(page_params);
    if @page.save
      render json: @page.to_json(include: :components)
    else
      render json: @page.errors
    end
  end

  def update
    @page = Page.find(params[:id])
    p "ASDKJLSADASD"
    p page_params
    par = page_params
    par[:components_attributes] ||= []
    if @page.update(page_params)
      render json: @page.to_json(include: :components)
    else
      render json: @page.errors
    end
  end

  def show
    @page = Page.find(params[:id])
    render json: @page.to_json(include: :components)
  end

  private
  def page_params
    params.require(:page).permit(:name, :path, components_attributes: [:id, :name, :layout, :props, :_destroy]).tap do |wl|
      unless params[:page][:components_attributes]
        wl[:components_attributes] = []
      else
        params[:page][:components_attributes].each_with_index do |comp,idx|
          wl[:components_attributes][idx][:layout] = params[:page][:components_attributes][idx][:layout]
          wl[:components_attributes][idx][:props] = params[:page][:components_attributes][idx][:props]
        end
      end
    end
  end

end
