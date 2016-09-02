json.id @user.id
json.email @user.email
json.sites @user.sites do |site|
  json.merge! site.attributes
  json.pages site.pages
end
