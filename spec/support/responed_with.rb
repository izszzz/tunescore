# frozen_string_literal: true

RSpec.shared_examples 'respond_with' do |http_status, openapi: false|
  # openapi
  openapi = { summary: metadata[:example_group][:parent_example_group][:parent_example_group][:description] } if openapi
  describe '', openapi: openapi do
    let(:id) do
      super()
    rescue StandardError
      nil
    end
    let(:params) do
      super()
    rescue StandardError
      nil
    end

    it do
      process method, url(id:), params:, as: format
      expect(response).to have_http_status(http_status)
    end
  end

  def description
    RSpec.current_example.metadata[:example_group][:parent_example_group][:parent_example_group][:parent_example_group][:description]
  end

  def format
    value = description.split(' ')[2] || nil
    value ? value.to_sym : nil
  end

  def action
    description.split(' ')[1].gsub(%r{/}, '')
  end

  def method
    description.split(' ')[0].downcase
  end

  def controller
    self.class.top_level_description.downcase
  end

  def url(id: nil, params: nil)
    url_for controller:, action:, id:
  end
end
