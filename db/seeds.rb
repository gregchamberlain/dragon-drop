# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# pages = ["About", "Contact", "Store"]

# demo = User.create!({email: 'demo@dragon-drop.com', password: 'password'})
# 2.times do
#   site = demo.sites.new(name: Faker::Internet.domain_name, template: true)
#   site.pages.new(name: pages.sample)
#   site.save!
# end

# template_master = User.create!({email: 'templatemaster@dragon-drop.com', password: 'password'})
# 10.times do
#   site = template_master.sites.new(name: Faker::Internet.domain_name, template: true)
#   site.pages.new(name: pages.sample)
#   site.save!
# end

# 60.times do |i|
#   site = Site.last
#   rand(40).times do
#     site.views.create!(created_at: i.days.ago)
#   end
#   rand(40).times do
#     site.views.create!(created_at: i.days.from_now)
#   end
# end
