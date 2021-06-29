class JourneysInProgressController < ApplicationController

    def index
        @journeys_in_progress = NewJourney.all
        render json: @journeys_in_progress, status: 200
    end

    def create
        @journey_in_progress = JourneyInProgress.create(journeys_in_progress_params)
        render json: @journeys_in_progress, status: 200
    end

    def show
        @journeys_in_progress = JourneyInProgress.all
        render json: @journeys_in_progress, status: 200
    end

    def destroy
        @journeys_in_progress.destroy
    end

    private
    def journeys_in_progress_params
        params.require(:journeys_in_progress).permit(:title, :description, :park_id, :user_id, :journey_id)
    end

end