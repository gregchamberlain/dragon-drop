json.array! @sites do |site|
  json.extract! site, :id, :name, :identifier, :description, :pages
end
