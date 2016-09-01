class Api::TemplatesController < ApplicationController

  def index
    render json: Site.where(template: true)
  end

end
