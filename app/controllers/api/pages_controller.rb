class Api::PagesController < ApplicationController

  def index
    render json: Page.where('site_id': params[:site_id]);
  end

  def create
    site = Site.find_by_identifier(params[:site_id])
    if site.pages.length >= 5
      render json: ["Max of 5 pages per site!"], status: 400
      return
    end
    @page = site.pages.new(page_params);
    if @page.save
      render json: @page.to_json(include: :components)
    else
      render json: @page.errors.full_messages, status: 400
    end
  end

  def update
    @page = Page.find(params[:id])
    if (@page.site.user != current_user)
      return render json: ["This site doesn't belong to you!"], status: 403
    end
    if @page.path == '/' && page_params[:path] != '/'
      return render json: ["The root pages path cannot be changed"], status: 400
    end
    if @page.update(page_params)
      render json: @page.to_json(include: :components)
    else
      render json: @page.errors.full_messages, status: 400
    end
  end

  def destroy
    @page = Page.find_by(id: params[:id])
    if @page.path == '/'
      render json: ["Cannot destroy your root route"], staus: 400
    end
    if @page.destroy
      render json: @page
    else
      render json: @page.errors.full_messages, status: 400
    end
  end

  def show
    @page = Page.find(params[:id])
    render json: @page.to_json(include: :components)
  end

  private
  def page_params
    params.require(:page).permit(:name, :path, components_attributes: [:id, :name, :layout, :props, :_destroy])
  end

end
