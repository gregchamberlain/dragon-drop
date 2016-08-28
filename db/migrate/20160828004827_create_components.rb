class CreateComponents < ActiveRecord::Migration
  def change
    create_table :components do |t|
      t.string :name
      t.string :layout
      t.text :props
      t.integer :page_id

      t.timestamps null: false
    end
    add_index :components, :page_id
  end
end
