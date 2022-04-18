module ApplicationHelper
	def svg_use_tag(name, **attributes)
		path = asset_path("svg/#{name}.svg")
		tag.svg **attributes do
			tag.use "xlink:href": "#{path}##{name}"
		end
	end
end
