module Api
  class ApiController < ApplicationController
    before_action :authorize_access_request!, only: [:auth]

    def home
      render json: { data: "Hello from API!" }
    end

    def auth
      p "trying"
      render json: current_user
    end
  end
end
