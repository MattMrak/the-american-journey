class NewJourneyController < ApplicationController
    def index
        if params[:user_id] && @user = User.find_by_id(params[:user_id])
            @journeys_in_progress = @user.journeys_in_progress
        else
            @journeys_in_progress = JourneyInProgress
        end
    end

    def show
        @journey_in_progress = JourneyInProgress.find_by_id(params[:id])
        redirect_to journeys_in_progress_path if !@journey_in_progress
    end

    def destroy
        @journey_in_progress = JourneyInProgress.find(params[:id])
        @journey_in_progress.destroy
        redirect_to journeys_in_progress_path
    end

end