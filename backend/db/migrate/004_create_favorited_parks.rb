class CreateFavoritedParks < ActiveRecord::Migration[6.1]
    def change
      create_table :favorited_parks do |t|
        t.string :full_name
        t.string :description
        t.string :contacts
        t.string :entrance_fees
        t.string :operating_hours
        t.string :addresses
        t.integer :user_id
      end
    end
end