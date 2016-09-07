class CreateViews < ActiveRecord::Migration
  def change
    create_table :views do |t|
      t.integer :site_id
      t.integer :page_id

      t.timestamps null: false
    end
    add_index :views, :site_id
    add_index :views, :page_id
  end
end
