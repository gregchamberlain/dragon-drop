class AddTemplateToPages < ActiveRecord::Migration
  def change
    add_column :pages, :template, :boolean, default: false
  end
end
