class FavoritedParkSerializer < ActiveModel::Serializer
    attributes :user_id, :id, :full_name, :description, :contacts, :entrance_fees, :operating_hours, :addresses
    belongs_to :user
end