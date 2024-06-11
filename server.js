'use strict';

const http = require('http');
const debug = require('debug')('livraria-api:server');
const express = require('express');

const app = express();
const defaultPort = 3000; // Porta padrão
app.set('port', defaultPort);

// Função para normalizar a porta
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        // Nome da pipe
        return val;
    }
    if (port >= 0) {
        // Número da porta
        return port;
    }
    return false;
}

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Livraria Store API",
        version: "0.0.1"
    });
});
app.use('/', route);

server.listen(port);
server.on('erro, onError');
server.on('listening', onListening);


// Normaliza a porta e verifica se está disponível
const port = normalizePort(process.env.PORT || defaultPort);
app.set('port', port);

// Tratamento de erros para a porta já em uso
server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
});

server.listen(port, () => {
    console.log('API Rodando na porta ' + port);
});

