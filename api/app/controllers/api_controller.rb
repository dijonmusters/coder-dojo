class ApiController < ApplicationController
  def home
    render json: { data: "Hello from API!" }
  end
end
