class Api::SessionsController < ApplicationController

  def create
    @user = User.includes(sites: :pages).find_by_credentials(user_params[:email], user_params[:password])
    if @user
      login(@user)
      render '/api/users/show'
    else
      render json: ["Invalid username or password"], status: 400
    end
  end

  def destroy
    if current_user
      current_user.reset_session_token!
      session[:session_token] = nil
      render json: {}
    else
      render json: ["No current session"], status: 404
    end
  end
end
