class CompletedJourneysController < ApplicationController
    def index
        if params[:user_id] && @user = User.find_by_id(params[:user_id])
            @completed_journeys = @user.completed_journeys
        else
            @completed_journeys = CompletedJourney
        end
    end

    def show
        @completed_journey = CompletedJourney.find_by_id(params[:id])
        redirect_to completed_journeys_path if !@completed_journey
    end

    def destroy
        @completed_journey = CompletedJourney.find(params[:id])
        @completed_journey.destroy
        redirect_to completed_journeys_path
    end

end