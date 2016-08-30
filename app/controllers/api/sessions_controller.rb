class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params[:email], user_params[:password])
    if @user
      login(@user)
    else
      render json: ["invalid username or password"], status: 400
    end
  end

  def destroy
    logout
  end
end
