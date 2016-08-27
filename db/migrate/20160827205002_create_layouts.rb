class CreateLayouts < ActiveRecord::Migration
  def change
    create_table :layouts do |t|
      t.string :name
      t.text :data

      t.timestamps null: false
    end
  end
end
