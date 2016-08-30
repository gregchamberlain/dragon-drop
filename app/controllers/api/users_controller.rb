class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def destroy
    @user = User.find_by_id(params[:id])
    unless @user
      render json: ["This user does not exist"], status: 404
      return
    end
    unless current_user == @user
      render json: ["You can't delete other users!"], status: 403
      return
    end
    if @user.destroy
      render :show
    else
      render json: @user.errors.full_messages, status: 500
    end
  end
end
