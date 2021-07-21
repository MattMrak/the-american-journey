class AllParksController < ApplicationController

    def index
        @all_parks = AllPark.all
        render json: @all_parks, status: 200
    end

    def create
        @all_park = AllPark.create(all_parks_params)
        render json: @all_parks, status: 200
    end

    def show
        @all_parks = AllPark.all
        render json: @all_parks, status: 200
    end

    private
    def all_parks_params
        params.require(:all_parks).permit(:id, :fullName, :description, :contacts, :entranceFees, :operatingHours, :addresses)
    end

end