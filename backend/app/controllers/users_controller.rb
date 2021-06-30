class UsersController < ApplicationController

    def index
      @users = User.all 
      render json: @users
  end

  def show
      @user = User.find(params[:id])
      render json: @user
  end

  def create
      @user = User.create(strong_params)
      render json: @user
  end

  private

  def strong_params
      params.permit(:email, :password, :user_id)
  end

end