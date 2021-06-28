class User < ApplicationRecord
    has_many :new_journeys
    has_many :journeys_in_progress
    has_many :completed_journeys
    has_many :favorited_parks
    validates :email, :password, presence: true
    validates :email, uniqueness: true
end