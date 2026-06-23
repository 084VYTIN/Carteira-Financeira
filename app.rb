require 'sinatra'

require 'sinatra'
require 'json'

set :transacoes, []

get '/' do
  erb :index
end

get '/transacoes' do
  content_type :json
  settings.transacoes.to_json
end

post '/adicionar' do
  valor = params[:valor].to_f
  settings.transacoes << valor 
  
  saldo_total = settings.transacoes.sum
  saldo_total.to_s
end