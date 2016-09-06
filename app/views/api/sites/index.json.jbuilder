json.array! @sites do |site|
  json.merge! site.attributes
  json.root_page do
    json.merge! site.pages.first.attributes
    json.components do
      json.array! site.pages.first.components do |c|
        json.merge! c.attributes
      end
    end
  end
end
