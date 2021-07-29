class FavoritedParksController < ApplicationController

  def index
    @favorited_parks = FavoritedPark.all
    render json: @favorited_parks, status: 200
  end

  def create
    @favorited_park = FavoritedPark.create(favorited_park_params)
    render json: @favorited_parks, status: 200
  end

  def show
    @favorited_parks = FavoritedPark.all
    render json: @favorited_parks, status: 200
  end

  def destroy
    @favorited_park = FavoritedPark.find(params[:id])
    @favorited_park.destroy
  end

  private

  def favorited_park_params
    params.permit(:id, :fullName, :description, :contacts, :entranceFees, :operatingHours, :addresses)
    # params.require(:favorited_parks).permit(:id, :fullName, :description, :contacts, :entranceFees, :operatingHours, :addresses)
  end

end