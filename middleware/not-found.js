function notFoundHandler(req, res){
    return res.status(404).send(`<h1>Page not found!</h1>`)
}