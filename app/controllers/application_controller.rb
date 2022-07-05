# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery except: [:destroy]
  before_action :set_gon
  around_action :switch_locale

  def switch_locale(&action)
    locale = params[:locale] || I18n.default_locale
    I18n.with_locale(locale, &action)
  end

  def after_sign_out_path_for(_resource_or_scope) = root_path

  def set_gon
    gon.push({
               # TODO: fix
               validators: {
                 user: User.validators.to_a
               },
               models: {
                 user: User.columns
               },
               currentUser: current_user,
               authenticity_token: form_authenticity_token
             })
  end
end
