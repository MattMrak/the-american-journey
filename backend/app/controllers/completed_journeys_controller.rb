class CompletedJourneysController < ApplicationController
    def index
        @completed_journeys = CompletedJourney.all
        render json: @completed_journeys, status: 200
    end

    def create
        @journey_in_progress = CompletedJourney.create(completed_journey_params)
        render json: @journeys_in_progress, status: 200
    end

    def show
        @completed_journey = CompletedJourney.all
        render json: @completed_journeys, status: 200
    end

    def destroy
        @completed_journey = CompletedJourney.find(params[:id])
        @completed_journey.destroy
    end

    private
    def completed_journey_params
        params.require(:completed_journeys).permit(:title, :description, :park_id, :user_id, :journey_id)
    end

end