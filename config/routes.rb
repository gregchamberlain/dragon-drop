Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :layouts, only: [:index, :create]
    resources :sites, only: [:index, :create, :show] do
      resources :pages, only: [:index, :create]
    end
  end

end
