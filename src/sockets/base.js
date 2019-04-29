module.exports = function (io) {
  const nsp = io.of('/test')
  nsp.on('connection', function (socket) {
    console.log('someone connected', socket.id)

    socket.on('connect_timeout', () => {
      console.log('Waiting connection...', socket.id)
    })

    socket.on('disconnect', (reason) => {
      console.log('Connection lost...', reason, socket.id)
    })
  })
}
