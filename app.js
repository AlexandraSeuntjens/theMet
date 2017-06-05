var express = require("express");
var path = require("path");
var app = express();

app.set('schilderijFile', require('./config/schilderij.json'));
app.set('categorieenFile', require('./config/categorieen.json'));


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'))

app.use(require("./routes/root_router"));
app.use(require("./routes/schilderij_router"));
app.use(require("./routes/categorieen_router"));

app.listen(app.get('port'), function() {
   app.get('port');
});
