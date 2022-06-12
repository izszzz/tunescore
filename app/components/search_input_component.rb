# frozen_string_literal: true

class SearchInputComponent < ViewComponent::Base
	include Ransack::Helpers::FormHelper
	def initialize(q:, search_matchers:)
		@q = q
		@search_matchers = search_matchers
	end
end
