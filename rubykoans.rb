require 'rubygems'
require 'sinatra'
require 'haml'

not_found do
  haml :error
end

get '/' do
  haml :index
end

get '/windows' do
  haml :windows
end
