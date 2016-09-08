json.merge! @site.attributes
json.root_page do
  json.merge! @site.pages.first.attributes
  json.components do
    json.array! @site.pages.first.components do |c|
      json.merge! c.attributes
    end
  end
end
json.views @site.views_by_date
json.pages do
  json.array! @site.pages do |page|
    json.merge! page.attributes
    json.views page.views_by_date
    json.components do
      json.array! page.components do |c|
        json.merge! c.attributes
      end
    end
  end
end
