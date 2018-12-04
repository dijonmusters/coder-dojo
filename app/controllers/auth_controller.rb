class AuthController < ApplicationController
  before_action :authorize_access_request!

  def index
    render json: current_user
  end
end