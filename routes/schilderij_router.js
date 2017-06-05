var express = require("express");
var schilderij = express.Router();

schilderij.get('/items/:id', function(req, res) {
  var schilderijFile = req.app.get('schilderijFile');
  var id = req.params.id;
  var teller = 0;
  var item = "";
  while (teller < schilderijFile.schilderij.length ) {
    if (schilderijFile.schilderij[teller].id == id) {
      item = schilderijFile.schilderij[teller];
    }
    teller++;
  }
  if (item !== "") {
    res.render("schilderij", {
      item: item
    });
  } else {
    res.render("404", {});
  }
});

module.exports = schilderij;
