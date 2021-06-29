class CreateFavoritedParks < ActiveRecord::Migration[6.1]
    def change
      create_table :favorited_parks do |t|
        t.integer :user_id
        t.integer :park_id
      end
    end
end