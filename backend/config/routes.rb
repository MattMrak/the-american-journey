Rails.application.routes.draw do
  resources :visited_parks
  resources :favorited_parks
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
