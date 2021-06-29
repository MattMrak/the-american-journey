class FavoritedParkSerializer < ActiveModel::Serializer
    attributes :id, :park
    belongs_to :user
end