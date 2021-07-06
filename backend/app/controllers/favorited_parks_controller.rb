class FavoritedParksController < ApplicationController
    before_action :set_params, only: [:show, :update, :destroy]

  def index
    @favorited_parks = FavoritedPark.all
    render json: @favorited_parks, only: [:user_id, :park_id], status: 200
  end

  def create
    @favorited_park = FavoritedPark.create(favorited_park_params)
    render json: @favorited_park, status: 200
  end

  def show
    render json: @favorited_park, status: 200
  end

  def destroy
    @favorited_park.destroy
  end

  private

  def favorited_park_params
    params.require(:favorited_park).permit(:user_id, :id, :full_name, :description, :contacts, :entrance_fees, :operating_hours, :addresses)
  end

  def set_params
    @favorited_park = FavoritedPark.find(params[:id])
  end
end