Rails.application.routes.draw do
  devise_for :users
  root 'static_pages#home'
  resources :users, only: [:index, :show]
  resources :albums
  resources :artists
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
end
