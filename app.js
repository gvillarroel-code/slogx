const express = require('express')
const fs = require('fs')
const app = express()
const port = 5000
const dateFormat = require('dateformat')

var fecha = ""
var result = ""


app.get('/', (req, res) => {

  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);

  fs.stat('Linksrv.log', (errs, stats) => {
    if (errs) {
      result = '<h2> Log Siblink ..:  <br> '
      res.end(result + 'Error al abrir el archivo Linksrv.log </h2>')
      return 0
    } 
    fecha = dateFormat(stats.mtime, "dd-mm-yyyy hh:MM:ss")
  })


  var file = fs.readFile('Linksrv.log', function (err, data) {
    if (err) {
      result = '<h2> Log Siblink ..:  <br> '
      res.end(result + 'Error al abrir el archivo Linksrv.log </h2>')
      return 0
    } else {


      result = '<h2>Log Sinlink...:  ' + fecha + '</h2>'
      result = result + '<br>__________________________________________________________________________________<br>'

      result = result + data.toString().replace(/(?:\r\n|\r|\n)/g, '<br>')
      res.end(result)
    }
  })

})

app.listen(port, () => {
  console.log(`escuchando en http://localhost:${port}`)
})
