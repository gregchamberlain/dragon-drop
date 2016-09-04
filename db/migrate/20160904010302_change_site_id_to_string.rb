class ChangeSiteIdToString < ActiveRecord::Migration
  def change
    change_column :pages, :site_id, :string
  end
end
