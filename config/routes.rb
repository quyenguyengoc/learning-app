Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    post '/login' => 'sessions#create'
    resource :auth, only: :show

    scope :lessons do
      get '' => 'lessons#index'
      get '/:id' => 'lessons#show'
    end
  end
end
