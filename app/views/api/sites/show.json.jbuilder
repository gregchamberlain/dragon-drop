json.merge! @site.attributes
json.root_page do
  json.merge! @site.pages.first.attributes
  json.components do
    json.array! @site.pages.first.components do |c|
      json.merge! c.attributes
    end
  end
end
json.views do
  json.array! @site.views do |view|
    json.extract! view, :id, :created_at
  end
end
json.pages do
  json.array! @site.pages do |page|
    json.merge! page.attributes
    json.views do
      json.array! page.views do |view|
        json.extract! view, :id, :created_at
      end
    end
    json.components do
      json.array! page.components do |c|
        json.merge! c.attributes
      end
    end
  end
end
