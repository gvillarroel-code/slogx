const fs = require('fs');
const dateFormat = require('dateformat');

var datoslog = {
  fecha: "",
  lines: ''
};

var myres="";

const getlog = (req, res) => {
  
  myres=res;
  
  fs.stat('Linksrv.log', (errs, stats) => {
    if (errs) {
      result = '<h2> Log Siblink ..:  <br> '
      res.end(result + 'Error al abrir el archivo Linksrv.log </h2>')
      return 0
    }
    datoslog.fecha = dateFormat(stats.mtime, "dd-mm-yyyy hh:MM:ss")
  })

  var exec = require('child_process').exec; 

  exec('tail -3000 Linksrv.log', function (error, results) {
    result_exec(results.toString().replace(/(?:\r\n|\r|\n)/g, '<br>'));
  });


}

function result_exec(valor) {
  datoslog.lines=valor;
  myres.render('linksrv_log', {datoslog} );
}


module.exports = getlog;
