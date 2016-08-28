class CreateSites < ActiveRecord::Migration
  def change
    create_table :sites do |t|
      t.string :name
      t.string :identifier
      t.integer :user_id
      t.boolean :template

      t.timestamps null: false
    end
    add_index :sites, :identifier, unique: true
    add_index :sites, :user_id
  end
end
