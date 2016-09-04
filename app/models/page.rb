class Page < ActiveRecord::Base
	belongs_to :site,
		class_name: :Site,
		primary_key: :identifier,
		foreign_key: :site_id

	has_many :components, dependent: :destroy

	accepts_nested_attributes_for :components, allow_destroy: true
	validates :name, :path, presence: true
	validates_uniqueness_of :name, :path, case_sensitive: false, scope: :site_id

	after_initialize :ensure_path

	def ensure_path
		self.path ||= "/#{self.name.downcase}"
	end
end
