class VisitedParksController < ApplicationController

    def index
        @visited_parks = VisitedPark.all
        render json: @visited_parks, status: 200
    end

    def show
        @visited_park = VisitedPark.find(params[:id])
        @visited_park = VisitedPark.all
        render json: @visited_parks, status: 200
    end
    
    def create
        @visited_park = VisitedPark.create(visited_parks_params)
        render json: @visited_park, status: 200
    end
    
    def destroy
        @visited_park = VisitedPark.find(params[:id])
        @visited_park.destroy
        render json: @visited_park, status: 200
    end

    private

    def visited_parks_params
        params.require(:visited_parks).permit(:id, :fullName, :description, :contacts, :entranceFees, :operatingHours, :addresses)
    end

end