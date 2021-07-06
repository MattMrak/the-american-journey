class CreateVisitedParks < ActiveRecord::Migration[6.1]
    def change
      create_table :visited_parks do |t|
        t.string :full_name
        t.string :description
        t.string :addresses
        t.integer :user_id
      end
    end
end