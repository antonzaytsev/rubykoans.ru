require 'rubygems'
require 'sinatra'
require 'haml'

not_found do
  haml :error
end

get '/' do
  @page = 'nix'
  haml :index
end

get '/windows' do
  @page = 'windows'
  haml :windows
end
