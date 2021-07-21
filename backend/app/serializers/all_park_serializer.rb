class AllParkSerializer < ActiveModel::Serializer
    attributes :fullName, :description, :contacts, :entranceFees, :operatingHours, :addresses
    # belongs_to :user
end