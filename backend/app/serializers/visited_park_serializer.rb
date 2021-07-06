class VisitedParkSerializer < ActiveModel::Serializer
    attributes :user_id, :id, :full_name, :description, :addresses
    belongs_to :user
end