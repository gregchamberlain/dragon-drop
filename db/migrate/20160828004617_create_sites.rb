class CreateSites < ActiveRecord::Migration
  def change
    create_table :sites do |t|
      t.string :name, null: false
      t.string :identifier, null: false
      t.integer :user_id, null: false
      t.boolean :template, default: false

      t.timestamps null: false
    end
    add_index :sites, :identifier, unique: true
    add_index :sites, :user_id
  end
end
