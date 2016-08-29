# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160828004827) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "components", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "layout",     null: false
    t.text     "props",      null: false
    t.integer  "page_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "components", ["page_id"], name: "index_components_on_page_id", using: :btree

  create_table "layouts", force: :cascade do |t|
    t.string   "name"
    t.text     "data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pages", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "path",       null: false
    t.integer  "site_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "pages", ["site_id", "name"], name: "index_pages_on_site_id_and_name", unique: true, using: :btree
  add_index "pages", ["site_id", "path"], name: "index_pages_on_site_id_and_path", unique: true, using: :btree

  create_table "sites", force: :cascade do |t|
    t.string   "name",                       null: false
    t.string   "identifier",                 null: false
    t.integer  "user_id",                    null: false
    t.boolean  "template",   default: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "sites", ["identifier"], name: "index_sites_on_identifier", unique: true, using: :btree
  add_index "sites", ["user_id"], name: "index_sites_on_user_id", using: :btree

end
