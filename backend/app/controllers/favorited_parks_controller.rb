class FavoritedParksController < ApplicationController
    def index
        if params[:user_id] && @user = User.find_by_id(params[:user_id])
            @favorited_parks = @user.favorited_parks
        else
            @favorited_parks = FavoritedPark
        end
    end

    def show
        @favorited_park = FavoritedPark.find_by_id(params[:id])
        redirect_to favorited_parks_path if !@favorited_park
    end

    def destroy
        @favorited_park = FavoritedPark.find(params[:id])
        @favorited_park.destroy
        redirect_to favorited_parks_path
    end

end