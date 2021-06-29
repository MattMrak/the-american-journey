class NewJourneySerializer < ActiveModel::Serializer
    attributes :user_id, :title, :description, :park_id
    belongs_to :user
end