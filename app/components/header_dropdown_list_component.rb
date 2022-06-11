# frozen_string_literal: true

class HeaderDropdownListComponent < ViewComponent::Base
	def initialize(text:, icon:, path:, dropdown_list_css_class: "", link_options: {})
		@text = text
		@icon = icon
		@path = path
		@dropdown_list_css_class = dropdown_list_css_class
		@link_options = link_options
	end
end
