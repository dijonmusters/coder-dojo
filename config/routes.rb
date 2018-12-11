Rails.application.routes.draw do
  namespace :auth do
    post 'login', to: 'login#create'
    delete 'logout', to: 'login#destroy'
    post 'register', to: 'registration#create'
    post 'refresh', to: 'refresh#create'
  end
  namespace :api do
    root to: 'api#home'
    get 'auth', to: 'auth#index'
  end
end