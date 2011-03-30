require 'rubygems'
require 'sinatra'
require 'haml'
require 'sass'


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

  @blocks = [
    {:name => 'introduction', :title => 'вступление'},
    {:name => 'structure', :title => 'структура'},
    {:name => "installing_ruby_on_#{@page}", :title => 'установка ruby', :id => "installing_ruby"},
    {:name => "what_editors_#{@page}", :title => 'Редакторы', :id => "what_editors"},
    {:name => "the_path_#{@page}", :title => 'путь к просвещению', :id => "the_path"},
    {:name => 'authors', :title => 'авторы'},
    {:name => 'cc', :title => 'лицензия'},
    {:name => 'inspiration', :title => 'вдохновители'},
    {:name => 'other_resources', :title => 'Дополнительные ресурсы'}
  ]

  haml :index
end

get '/windows' do
  @page = 'windows'
  @editors = [
    {:name => 'E Text Editor', :url => 'http://www.e-texteditor.com'},
    {:name => 'RubyMine',      :url => 'http://www.jetbrains.com/ruby'},
    {:name => 'jEdit',         :url => 'http://www.jedit.org'},
  ]

  @blocks = [
    {:name => 'introduction', :title => 'вступление'},
    {:name => 'structure', :title => 'структура'},
    {:name => "installing_ruby_on_#{@page}", :title => 'установка ruby', :id => "installing_ruby"},
    {:name => "what_editors_#{@page}", :title => 'Редакторы', :id => "what_editors"},
    {:name => "the_path_#{@page}", :title => 'путь к просвещению', :id => "the_path"},
    {:name => 'authors', :title => 'авторы'},
    {:name => 'cc', :title => 'лицензия'},
    {:name => 'inspiration', :title => 'вдохновители'},
    {:name => 'other_resources', :title => 'other_resources'}
  ]

  haml :windows
end

get '/stylesheets/screen.css' do
  scss 'stylesheets/screen'.to_sym
end

#i18 = R18n::I18n.new

