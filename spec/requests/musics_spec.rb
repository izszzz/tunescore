# frozen_string_literal: true

require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe "Musics", type: :request, openapi: false do
  # This should return the minimal set of attributes required to create a valid
  # Music. As you add validations to Music, be sure to
  # adjust the attributes here as well.
  let(:music) { attributes_for :music }

  let(:music_title_empty) { attributes_for :music, :title_empty }

  describe 'GET /index' do
    context 'should success' do
      it_behaves_like 'respond_with', :success
    end
  end

  describe 'GET /show' do
    context 'should be success' do
      let(:id) { create(:music).id }

      it_behaves_like 'respond_with', :success
    end
  end

  describe 'GET /new' do
    context 'should be success' do
      it_behaves_like 'respond_with', :success
    end
  end

  describe 'GET /edit' do
    context 'should be success' do
      let(:id) { create(:music).id }

      it_behaves_like 'respond_with', :success
    end
  end

  describe 'POST /create' do
    context 'with valid parameters' do
      it 'creates a new Music' do
        expect do
          post musics_url, params: { music: }
        end.to change(Music, :count).by(1)
      end

      it 'redirects to the created music' do
        post musics_url, params: { music: }
        expect(response).to redirect_to(music_url(Music.last))
      end
    end

    context 'with invalid parameters' do
      it 'does not create a new Music' do
        expect do
          post musics_url, params: { music: music_title_empty }
        end.to change(Music, :count).by(0)
      end

      it "renders a response with 422 status (i.e. to display the 'new' template)" do
        post musics_url, params: { music: music_title_empty }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end

    context 'should be success' do
      let(:params) { { music: music_title_empty } }

      it_behaves_like 'respond_with', :unprocessable_entity
    end
  end

  describe 'POST /create json', openapi: true do
    context 'should be success' do
      let(:id) { create(:music).id }
      let(:params) { { music: music_title_empty } }

      it_behaves_like 'respond_with', :unprocessable_entity, openapi: true
    end
  end

  describe 'PATCH /update' do
    context 'with valid parameters' do
      let(:new_attributes) { attributes_for :music }

      # it "updates the requested music" do
      #   music = Music.create! valid_attributes
      #   patch music_url(music), params: { music: new_attributes }
      #   music.reload
      #   expect(response).to be_successful
      # end

      it 'redirects to the music' do
        music = create :music
        patch music_url(music), params: { music: new_attributes }
        music.reload
        expect(response).to redirect_to(music_url(music))
      end
    end

    context 'should be success' do
      let(:id) { create(:music).id }
      let(:params) { { music: music_title_empty } }

      it_behaves_like 'respond_with', :unprocessable_entity
    end
  end

  describe 'PATCH /update json' do
    context 'should be success' do
      let(:id) { create(:music).id }
      let(:params) { { music: music_title_empty } }

      it_behaves_like 'respond_with', :unprocessable_entity, openapi: true
    end
  end

  describe 'DELETE /destroy' do
    it 'destroys the requested music' do
      music = create :music
      expect do
        delete music_url(music)
      end.to change(Music, :count).by(-1)
    end

    it 'redirects to the musics list' do
      music = create :music
      delete music_url(music)
      expect(response).to redirect_to(musics_url)
    end
  end
end
