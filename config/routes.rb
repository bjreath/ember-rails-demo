Rails.application.routes.draw do
  resources :employees
  root to: 'static#index'
end
