class FavoritedParkSerializer < ActiveModel::Serializer
    attributes :user_id, :id, :fullName, :description, :contacts, :entranceFees, :operatingHours, :addresses
    belongs_to :user
end