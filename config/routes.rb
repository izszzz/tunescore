Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  root 'static_pages#home'
  get '/settings', to: 'static_pages#settings'
  get '/search', to: 'static_pages#search'
  resources :score, only: [:show, :edit, :update]
  resources :musics
  resources :bands
  resources :users, only: [:index, :show]
  resources :albums
  resources :artists
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
end
