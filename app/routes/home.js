module.exports = function (app) {
    app.post('/', function (req, res) {
        console.log("chegou requisição")
        console.log(req.body)
        res.render("home/index");
        res.end();
    });
};
