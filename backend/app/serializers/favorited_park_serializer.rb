class FavoritedParkSerializer < ActiveModel::Serializer
    attributes :user_id, :park_id
    belongs_to :user
end