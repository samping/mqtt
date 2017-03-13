var mqtt = require('mqtt')

var PORT = 6002
var HOST = '183.230.40.39'

var options = {
  port: PORT,
  host: HOST,
  clientId: '4756548',
  username: '81886',
  password: 'TZGHtj2ywiOWy8nMAJVt=pg6Auw='
}

var client = mqtt.connect(options)
console.log('start')
// client.subscribe('messages')
// client.publish('messages', 'Current time is: ' + new Date())
client.on('message', function (topic, message) {
  console.log(topic)
  console.log(message)
})

client.on('connect', function () {
  console.log('Connected')
  var buf = new Buffer([0x03, 0x00, 0x0B,0x7B,0x22,0x74,0x65,0x73,0x74,0x22,0x3A,0x31,0x32,0x7D]);
  console.log(buf.toString())
  client.publish('$dp', buf.toString())
})
