class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :name, null: false
      t.string :path, null: false
      t.integer :site_id, null: false

      t.timestamps null: false
    end
    add_index :pages, [:site_id, :path], unique: true
    add_index :pages, [:site_id, :name], unique: true
  end
end
