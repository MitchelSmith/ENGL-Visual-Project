var express = require("express"),
    app     = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/home", function(req, res) {
    res.render("home");
});

app.get("/urbanite-spotlight", function(req, res) {
    res.render("urbanite-spotlight")
})

app.get("/solstice-festival", function(req, res) {
    res.render("solstice-festival")
})

app.get("/news/local-resident-joins-circus", function(req, res) {
    res.render("news/local-resident-joins-circus");
})

app.get("/news/preparing-for-this-years-solstice", function(req, res) {
    res.render("news/preparing-for-this-years-solstice");
})

app.get("/news/the-man-who-wanted-to-fly", function(req, res) {
    res.render("news/the-man-who-wanted-to-fly");
})

app.get("*", function(req, res) {
    res.render("home");
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Listening at port 3000...");
});