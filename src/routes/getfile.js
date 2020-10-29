const fs = require('fs')


const getfile = (req, res) => {
      res.download('Linksrv.log')
}

module.exports = getfile;
