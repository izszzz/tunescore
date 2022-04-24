class StaticPagesController < ApplicationController
  def home
    @musics = Music.all
  end

  def settings
  end
end
