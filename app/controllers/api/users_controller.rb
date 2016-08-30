class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 500
    end
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      render :show
    else
      render json: @user.errors.full_messages, status: 500
    end
  end
end
