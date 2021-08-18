class CreateAllParks < ActiveRecord::Migration[6.1]
    def change
      create_table :all_parks do |t|
        t.string :fullName
        t.string :description
        t.string :contacts
        t.string :entranceFees
        t.string :operatingHours
        t.string :addresses
      end
    end
end