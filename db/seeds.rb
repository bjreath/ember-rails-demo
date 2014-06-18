Employee.delete_all

100.times do
  Employee.create!(name: Faker::Name.name)
end
