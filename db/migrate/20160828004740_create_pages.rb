class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :name
      t.string :path
      t.integer :site_id

      t.timestamps null: false
    end
    add_index :pages, [:site_id, :path], unique: true
  end
end
