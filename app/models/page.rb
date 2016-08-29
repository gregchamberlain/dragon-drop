class Page < ActiveRecord::Base
	belongs_to :site
	has_many :components

	 accepts_nested_attributes_for :components, allow_destroy: true
end
