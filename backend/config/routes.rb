Rails.application.routes.draw do
  resources :new_journey
  resources :journeys_in_progress
  resources :completed_journeys
  resources :favorited_parks
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
