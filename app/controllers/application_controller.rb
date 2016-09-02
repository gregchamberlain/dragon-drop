class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  helper_method :current_user
  before_action :wait

  def wait
    # sleep(2)
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    session[:session_token] = user.session_token
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end

  def authorize
    unless current_user
      render json: ["You need to log in to edit sites"], status: 403
    end
  end
end
