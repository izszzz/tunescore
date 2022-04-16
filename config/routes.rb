Rails.application.routes.draw do
  resources :artists
  devise_for :users
  resources :users
  root 'static_pages#home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
end
