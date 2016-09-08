class Page < ActiveRecord::Base
	belongs_to :site,
		class_name: :Site,
		primary_key: :identifier,
		foreign_key: :site_id

	has_many :views, dependent: :destroy

	has_many :components, dependent: :destroy

	amoeba do
		enable
  end

	accepts_nested_attributes_for :components, allow_destroy: true
	validates :name, :path, presence: true
	validates_uniqueness_of :name, :path, case_sensitive: false, scope: :site_id

	after_initialize :ensure_path

	def ensure_path
		self.path ||= "/#{self.name.downcase}"
	end

	def views_by_date
		View.where(page_id: id).group('date(created_at)').count
	end
end
