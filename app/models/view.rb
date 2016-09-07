class View < ActiveRecord::Base
  belongs_to :site
  belongs_to :page
end
