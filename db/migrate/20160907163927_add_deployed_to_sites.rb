class AddDeployedToSites < ActiveRecord::Migration
  def change
    add_column :sites, :deployed, :datetime
  end
end
