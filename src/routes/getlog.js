const fs = require('fs');
const dateFormat = require('dateformat');


const getlog = (req, res) => {

  var fecha = ""
  var result = ""

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

  const data = fs.readFileSync('Linksrv.log', 'UTF-8');
  result = '<h3>Log Sinlink...:  ' + fecha + '</h3>'
  result = result + '<a href="download">Download Linksrv.log</a>'
  result = result + '<br>__________________________________________________________________________________<br>'

  res.write(result)

  const line = data.split(/\r?\n/);
  line.forEach((line) => {
    res.write(line + '<br>');
  });

  res.end('<br> FIN....');

}

module.exports = getlog;
