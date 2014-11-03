var net = require('net');

var server = net.createServer(function(connection) {
	console.log('Conexión abierta');
	connection.write('¿Hola?');
	connection.on('data', function(data) {
		if (String(data).trim() != 'hola') {
			connection.write('ERROR');
		} else {
			connection.write('mundo');
			console.log('Conexión cerrada');
		}
	});
});
server.listen(port);
