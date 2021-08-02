class FavoritedParksController < ApplicationController

  def index
    @favorited_parks = FavoritedPark.all
    render json: @favorited_parks, status: 200
  end

  def show
    @favorited_park = FavoritedPark.find(params[:id])
    @favorited_park = FavoritedPark.all
    render json: @favorited_parks, status: 200
  end
  
  def create
    @favorited_park = FavoritedPark.create(favorited_park_params)
    render json: @favorited_park, status: 200
  end

  def destroy
    @favorited_park = FavoritedPark.find(params[:id])
    @favorited_park.destroy
    render json: @favorited_park, status: 200
  end

  private

  def favorited_park_params
    params.require(:favorited_parks).permit(:id, :fullName, :description, :contacts, :entranceFees, :operatingHours, :addresses)
  end

end