class DreamsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_dream, only: [ :show, :destroy ]

  def index
    @dreams = current_user.dreams.order(created_at: :desc)
  end

  def show
  end

  def new
    @dream = Dream.new
  end

  def create
    @dream = current_user.dreams.build(dream_params)
    @dream.bakura_response = BakuraService.call(@dream.content)
    if @dream.save
      redirect_to @dream, notice: "夢を記録したよ〜"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @dream.destroy
    redirect_to dreams_path, notice: "削除したよ〜"
  end

  private

  def set_dream
    @dream = current_user.dreams.find(params[:id])
  end

  def dream_params
    params.require(:dream).permit(:content, :dream_type)
  end
end
