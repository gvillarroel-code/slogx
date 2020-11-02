var datoslog = {
  fecha: "",
  lines: '',
  error: ''
};

var myres="";

const status = (req, res) => {
  
  myres=res;
  
  var exec = require('child_process').exec; 

  exec('ssh dockerhost "export COLUMNS=160;/opt/Siblink/siblink-status"', function (error, results) {
    var err = "";
    var result = "";
    if (error) { err=error.toString().replace(/ /g, '&nbsp');}

    execout=results.toString().replace(/ /g, '&nbsp');
    result_exec(execout.toString().replace(/(?:\n)/g, '<br>'),err.toString().replace(/(?:\n)/g, '<br>'));
  });


}

function result_exec(valor,error) {
  datoslog.lines=valor;
  datoslog.error=error;

  myres.render('status', {datoslog} );
}


module.exports = status;
