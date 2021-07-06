class User < ApplicationRecord
    has_many :visited_parks
    has_many :favorited_parks
    validates :email, :password, presence: true
    validates :email, uniqueness: true
end