class CompletedJourneySerializer < ActiveModel::Serializer
    attributes :user_id, :title, :description, :park_id, :journey_id
    belongs_to :user
end