class CreateVisitedParks < ActiveRecord::Migration[6.1]
    def change
      create_table :visited_parks do |t|
        t.string :fullName
        t.string :description
        t.string :contacts
        t.string :entranceFees
        t.string :operatingHours
        t.string :addresses
      end
    end
end