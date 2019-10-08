class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authorize_request, except: :create
   
  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      token = encode(user_id: @user.id, username: @user.username)
      render json: { user: @user, token: token }, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :password)
    end
  
end
