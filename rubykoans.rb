require 'rubygems'
require 'sinatra'
require 'haml'

not_found do
  haml :error
end

get '/' do
  @page = 'nix'
  @editors = [
    {:name => 'Vim',      :url => 'http://code.google.com/p/macvim'},
    {:name => 'Emacs',    :url => 'http://homepage.mac.com/zenitani/emacs-e.html'},
    {:name => 'TextMate', :url => 'http://macromates.com'},
    {:name => 'RubyMine', :url => 'http://www.jetbrains.com/ruby'},
    {:name => 'jEdit',    :url => 'http://www.jedit.org'}
  ]

  haml :index
end

get '/windows' do
  @page = 'windows'
  @editors = [
    {:name => 'E Text Editor', :url => 'http://code.google.com/p/macvim'},
    {:name => 'RubyMine',      :url => 'http://www.jetbrains.com/ruby'},
    {:name => 'jEdit',         :url => 'http://www.jedit.org'},
  ]

  haml :windows
end
