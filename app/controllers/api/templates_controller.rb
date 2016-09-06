class Api::TemplatesController < ApplicationController

  before_action :authorize, only: [:clone]

  def index
    @sites = Site.where(template: true);
    render '/api/sites/index'
  end

  def clone
    template = Site.find_by_identifier(params[:id])
    @site = Site.new(template.attributes)
    @site.id = nil
    @site.name = site_params[:name]
    @site.description = site_params[:description]
    @site.identifier = Site.generateUniqueIdentifier(@site.name)
    @site.template = false
    @site.user = current_user

    template.pages.each do |page|
      newPage = Page.new(page.attributes)
      newPage.id = nil
      newPage.site = @site
      page.components.each do |c|
        newC = Component.new(c.attributes)
        newC.id = nil
        newC.page = newPage
        newPage.components << newC
      end
      @site.pages << newPage
    end
    p @site
    p @site.pages
      # render json: @site.to_json(include: { pages: {include: :components } } )

    if @site.save
      render json: @site.to_json(include: { pages: {include: :components } } )
    else
      render json: @site.errors.full_messages, status: 400
    end
  end

  private
  def site_params
    params.require(:site).permit(:name, :description)
  end

end
