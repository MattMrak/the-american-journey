class AllParksController < ApplicationController

  def index
    @all_parks = AllPark.all
    render json: @all_parks, status: 200
  end

  def show
    @all_park = AllPark.find(params[:id])
    render json: @all_park, status: 200
  end
  
  def create
    @all_park = AllPark.create(all_park_params)
    render json: @all_park, status: 200
  end

  def destroy
    @all_park = AllPark.find(params[:id])
    @all_park.destroy
    render json: @all_park, status: 200
  end

  private

  def all_park_params
    params.require(:all_parks).permit(:id, :fullName, :description, :contacts, :entranceFees, :operatingHours, :addresses)
  end

end