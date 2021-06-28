class NewJourneyController < ApplicationController
    # before_action :redirect_if_not_logged_in

    def new
        @new_journey = NewJourney.new
        @new_journey
    end

    def create
        @new_journey = current_user.new_journeys.build(new_journey_params)
        if @new_journey.save
            redirect_to new_journeys_path
        else
            render :new
        end
    end

    def index
        if params[:user_id] && @user = User.find_by_id(params[:user_id])
            @new_journeys = @user.new_journeys
        else
            @new_journeys = NewJourney
        end
    end

    def show
        @new_journey = NewJourney.find_by_id(params[:id])
        redirect_to new_journeys_path if !@new_journey
    end

    def destroy
        @new_journey = NewJourney.find(params[:id])
        @new_journey.destroy
        redirect_to new_journeys_path
    end

    private
    def new_journey_params
        params.require(:new_journey).permit(:title, :description, :park_id, :user_id)
    end

end