const Task = require('../Model/task-model');

module.exports.home= function(req,res){
    Task.find({},function(err,taskList){
        if(err){
            console.log('error in fetching tasks ',err);
            return;
        }
        console.log('taskList>>>>> ',taskList);
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

            console.log('newTask>>>> ',newTask);

        });

    }
    return res.redirect('back');
}