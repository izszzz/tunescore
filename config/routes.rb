Rails.application.routes.draw do
  get 'score/show'
  get 'score/edit'
  get 'score/update'
  resources :musics
  resources :bands
  devise_for :users
  root 'static_pages#home'
  get '/settings', to: 'static_pages#settings'
  resources :users, only: [:index, :show]
  resources :albums
  resources :artists
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
end
