const fs = require('fs');
const dateFormat = require('dateformat');


const getlog = (req, res) => {

  var fecha = ""
  var result = ""
  var lines = ""

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

  result = '<h3>Log Sinlink...:  ' + fecha + '</h3>'
  result = result + '<a href="download">Download Linksrv.log</a>'
  result = result + '<br><br>Mostrando ultimas 3000 lineas del log'
  result = result + '<br>__________________________________________________________________________________<br>'
  res.write(result)

  var exec = require('child_process').exec; 

  exec('tail -3000 Linksrv.log', function (error, results) {
    lines = results.toString().replace(/(?:\r\n|\r|\n)/g, '<br>')
    res.end(lines);
  });

}

module.exports = getlog;
