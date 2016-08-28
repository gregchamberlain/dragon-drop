class Component < ActiveRecord::Base
	serialize :layout, JSON
	serialize :props, JSON
	belongs_to :page
end
