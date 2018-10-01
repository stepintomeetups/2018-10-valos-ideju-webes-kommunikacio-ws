const express = require('express');
const WebSocket = require('ws');

const PORT = process.env.PORT

const server = express()
	.use(express.static(__dirname + '/public'))
	.post('/kek', function (req, res) {
		req.on('data', function (data) {
			wss.broadcast(data)
			console.log(data)
		})
	})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const wss = new WebSocket.Server({ server, perMessageDeflate: false });

wss.on('connection', (ws) => {
	console.log('Client connected');
	ws.on('close', () => console.log('Client disconnected'));
});
wss.broadcast = function(data) {
	wss.clients.forEach(function each(client) {
		if (client.readyState === WebSocket.OPEN) {
			client.send(data);
		}
	});
};
