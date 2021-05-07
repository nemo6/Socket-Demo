const io    = require("socket.io")
const port  = process.env.PORT // 8080

const server = io.listen(port)

server.on("connection", function(socket) {

	socket.on("envoyer", function(message) {
		
		console.log(message)

		server.emit("recuperer", message )
		
	})
	 
})

console.log(`Le contenu du fichier est afficher sur le localhost:${port}`)
