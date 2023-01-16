Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    post '/login' => 'sessions#create'
    resource :auth, only: :show

    resources :lessons, only: [:index, :show] do
      member do
        resources :lesson_details, only: :update
      end
    end
  end
end
