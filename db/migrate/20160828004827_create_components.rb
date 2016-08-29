class CreateComponents < ActiveRecord::Migration
  def change
    create_table :components do |t|
      t.string :name, null: false
      t.string :layout, null: false
      t.text :props, null: false
      t.integer :page_id, null: false

      t.timestamps null: false
    end
    add_index :components, :page_id
  end
end
