class FavoritedParkSerializer < ActiveModel::Serializer
    attributes :fullName, :description, :contacts, :entranceFees, :operatingHours, :addresses

end