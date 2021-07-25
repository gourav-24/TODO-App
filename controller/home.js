module.exports.home= function(req,res){
    return res.render('todoPage');
}

module.exports.createTask = function(req,res){
    console.log("data>>>> ",req.body);
    return res.send("<h1> data received </h1>")
}