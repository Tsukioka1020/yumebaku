Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  devise_for :users

  resources :dreams do
    collection do
      delete :destroy_all
    end
  end

  root "home#index"
  get "about", to: "home#about"
  get "terms", to: "static_pages#terms"
  get "privacy", to: "static_pages#privacy"
end
