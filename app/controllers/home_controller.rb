class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    @show_guide = current_user.first_login?
    current_user.update(first_login: false) if @show_guide
  end

  def about
  end
end
