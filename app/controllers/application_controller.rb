class ApplicationController < ActionController::Base
	before_action :set_gon
	protect_from_forgery :except => [:destroy]	
	around_action :switch_locale

	def switch_locale(&action)
		locale = params[:locale] || I18n.default_locale
		I18n.with_locale(locale, &action)
	end

	def after_sign_out_path_for(resource_or_scope) = root_path

	def set_gon
		gon.push({
			validators: {
				user: User.validators.to_a
			},
			currentUser: current_user,
		})
	end

end
