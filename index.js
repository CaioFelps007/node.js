var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

//Obter a data dinamica
var dataAtual = new Date();
var dataFormatada = dataAtual.toDateString('PT-BR');

  res.end('<h1 style="font-size: 24px;">Caio Felipe Vieira Ferreira<h3>Data atual '  +  dataFormatada +  '</p');
}).listen(8001);
