Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :layouts, only: [:index, :create]
    resources :sites, only: [:index, :create, :show, :destroy, :update] do
      resources :pages, only: [:index, :create]
    end
    resources :pages, only: [:update, :destroy, :show]
    resources :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end

end
