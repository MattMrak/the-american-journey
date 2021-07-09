# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#  t.string "full_name"
# t.string "description"
# t.string "contacts"
# t.string "entrance_fees"
# t.string "operating_hours"
# t.string "addresses"
# all parks ======= :id, :full_name, :description, :contacts, :entrance_fees, :operating_hours, :addresses

AllPark.create(full_name: "Garfield Grove", description: "Hidden gem in the heart of Franklin Square", contacts: "516-790-9462", entrance_fees: "$5.00", operating_hours: "9am - 5pm", addresses: "902 Garfield Street")