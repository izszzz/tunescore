class StaticPagesController < ApplicationController
  def home
    @musics = Music.all
    @artists = Artist.all
    @albums = Album.all
    @bands = Band.all
  end

  def settings
  end
end
