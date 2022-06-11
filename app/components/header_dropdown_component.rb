# frozen_string_literal: true

class HeaderDropdownComponent < ViewComponent::Base
	renders_one :icon
	renders_many :dropdown_lists, -> (text:, icon:, path:, dropdown_list_css_class: "", link_options: {}) do
		HeaderDropdownListComponent.new(text: text, icon: icon, path: path, dropdown_list_css_class: dropdown_list_css_class, link_options: link_options)
	end
end
