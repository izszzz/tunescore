class ScoreController < ApplicationController
  before_action :set_music, only: %i[ show edit update]

  def show
  end

  def edit
  end

  def update
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_music
      @music = Music.find(params[:id])
    end
end
