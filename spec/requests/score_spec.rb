# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Score', type: :request, openapi: false do
  describe 'GET /show' do
    context 'should be success' do
      let(:id) {create(:music).id}
      it_behaves_like 'respond_with', :success
    end
  end

  describe 'GET /edit' do
    context 'should be success' do
      let(:id) {create(:music).id}
      it_behaves_like 'respond_with', :success
    end
  end

  describe "GET /update" do
    context 'should be success' do
      let(:id) {create(:music).id}
      let(:params) {attributes_for :music }
      it_behaves_like 'respond_with', :success
    end
  end
end
