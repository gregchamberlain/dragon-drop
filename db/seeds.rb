# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


demo = User.create!({email: 'demo@dragon-drop.com', password: 'password'})
template_master = User.create!({email: 'templatemaster@dragon-drop.com', password: 'password'})
10.times do
  template_master.sites.create!(name: Faker::App.name, template: true)
end
