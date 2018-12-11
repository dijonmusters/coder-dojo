module Api
  class AuthController < ApplicationController
    before_action :authorize_access_request!

    def index
      p "trying"
      render json: current_user
    end
  end
end
