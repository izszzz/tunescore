class ScoreController < ApplicationController
  before_action :set_music, only: %i[show edit update]
  layout 'score'

  def show
    gon.rabl as: :music
  end

  def edit
    gon.rabl as: :music
  end

  def update
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_music
      @music = Music.find(params[:id])
    end
end
