class NewJourneyController < ApplicationController

    def index
        @new_journey = NewJourney.all
        render json: @new_journey, status: 200
    end

    def create
        @new_journey = NewJourney.create(new_journey_params)
        render json: @new_journey, status: 200
    end

    def show
        @new_journey = NewJourney.all
        render json: @new_journey, status: 200
    end

    def destroy
        @new_journey.destroy
    end

    private
    def new_journey_params
        params.require(:new_journey).permit(:title, :description, :park_id, :user_id, :journey_id)
    end

end