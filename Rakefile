# frozen_string_literal: true

# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

JSRailsRoutes.configure do |c|
  c.output_dir = Rails.root.join('app/javascript')
  c.target = 'ts'
end
