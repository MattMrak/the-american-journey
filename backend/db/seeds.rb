# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

FavoritedPark.destroy_all
FavoritedPark.reset_pk_sequence
VisitedPark.destroy_all
VisitedPark.reset_pk_sequence

FavoritedPark.create(fullName: "Garfield Grove", description: "Hidden gem in the heart of Franklin Square", contacts: "516-790-9462", entranceFees: "$5.00", operatingHours: "9am - 5pm", addresses: "902 Garfield Street, Franklin Square, NY 11010")

VisitedPark.create(fullName: "Garfield Grove", description: "Hidden gem in the heart of Franklin Square", contacts: "516-790-9462", entranceFees: "$5.00", operatingHours: "9am - 5pm", addresses: "902 Garfield Street, Franklin Square, NY 11010")