class CreateNewJourneys < ActiveRecord::Migration[6.1]
    def change
      create_table :new_journeys do |t|
        t.string :title
        t.string :description
        t.integer :user_id
        t.integer :journey_id
        t.integer :park_id
      end
    end
end