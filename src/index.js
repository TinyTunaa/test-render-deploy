const express = require('express')
const server = express()

server.use((req, res) => {
  console.log(req.ip)

  const ips = ["::1", "::ffff:192.168.178.192", "::ffff:192.168.178.24"];
  if (ips.includes(req.ip)) {
    res.send("welcome to my candle shop")

  } else {
    res.send("arson")


  }
  // res.send('Arson')
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log('Server listening on http://localhost:' + PORT)
})
