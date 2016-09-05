class Api::TemplatesController < ApplicationController

  def index
    @sites = Site.where(template: true);
    render json: Site.where(template: true)
  end

end
