class AllParkSerializer < ActiveModel::Serializer
    attributes :id, :full_name, :description, :contacts, :entrance_fees, :operating_hours, :addresses
end