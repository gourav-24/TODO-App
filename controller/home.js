const Task = require('../Model/task-model');

module.exports.home= function(req,res){
    Task.find({},function(err,taskList){
        if(err){
            console.log('error in fetching tasks ',err);
            return;
        }
        return res.render('todoPage',{
            listOfTask: taskList
        });
    });
    
    
}

module.exports.createTask = function(req,res){
    console.log("data>>>> ",req.body);
    if(req.body!=null && req.body!=''){
        Task.create({
            description:req.body.task,
            dueDate:req.body.dDate
        },function(err,newTask){
            if(err){
                console.log('error in creating new task ',err);
                return;
            }

        });

    }
    return res.redirect('back');
}

module.exports.delete = function(req,res){
    Task.findByIdAndDelete(req.query.Id,function(err){
        if(err){
            console.log('error in creating new task ',err);
            return;
        }
    });
    return res.redirect('back');

}