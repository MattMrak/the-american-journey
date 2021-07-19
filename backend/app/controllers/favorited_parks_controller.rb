class FavoritedParksController < ApplicationController
    # before_action :set_params, only: [:show, :update, :destroy]

  def index
    @favorited_parks = FavoritedPark.all
    # render json: @favorited_parks, only: [:user_id, :id], status: 200
    render json: @favorited_parks, status: 200
  end

  def create
    # binding.pry
    @favorited_park = FavoritedPark.create(favorited_park_params)
    render json: @favorited_parks, status: 200
  end

  def show
    @favorited_parks = FavoritedPark.all
    render json: @favorited_parks, status: 200
  end

  def destroy
    @favorited_park.destroy
  end

  private

  def favorited_park_params
    params.require(:favorited_parks).permit(:id, :fullName, :description, :contacts, :entranceFees, :operatingHours, :addresses)
  end

  def set_params
    @favorited_park = FavoritedPark.find(params[:id])
  end
end