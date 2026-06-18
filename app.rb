require 'sinatra'

set :saldo, 0.0

get '/' do
  erb :index
end

post '/adicionar' do
  valor = params[:valor].to_f
  settings.saldo += valor
  settings.saldo.to_s
end

get '/saldo' do
  settings.saldo.to_s
end