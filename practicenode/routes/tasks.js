var express = require('express');
var router = express.Router();
const serv = require("../services/sevices");


// var mongojs = require('mongojs');
// var db = mongojs('mongodb+srv://rishi:<mongodb>@cluster0-5kgma.mongodb.net/test?retryWrites=true&w=majority');



// // Get All Tasks
// router.get('/tasks', function(req, res, next){
//     db.tasks.find(function(err, tasks){
//         if(err){
//             res.send(err);
//         }
//         res.json(tasks);
//     });
// });

// // Get Single Task
// router.get('/task/:id', function(req, res, next){
//     db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
//         if(err){
//             res.send(err);
//         }
//         res.json(task);
//     });
// });

// //Save Task
// router.post('/task', function(req, res, next){
//     var task = req.body;
//     if(!task.title || !(task.isDone + '')){
//         res.status(400);
//         res.json({
//             "error": "Bad Data"
//         });
//     } else {
//         db.tasks.save(task, function(err, task){
//             if(err){
//                 res.send(err);
//             }
//             res.json(task);
//         });
//     }
// });

// // Delete Task
// router.delete('/task/:id', function(req, res, next){
//     db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
//         if(err){
//             res.send(err);
//         }
//         res.json(task);
//     });
// });

// // Update Task
// router.put('/task/:id', function(req, res, next){
//     var task = req.body;
//     var updTask = {};
    
//     if(task.isDone){
//         updTask.isDone = task.isDone;
//     }
    
//     if(task.title){
//         updTask.title = task.title;
//     }
    
//     if(!updTask){
//         res.status(400);
//         res.json({
//             "error":"Bad Data"
//         });
//     } else {
//         db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
//         if(err){
//             res.send(err);
//         }
//         res.json(task);
//     });
//     }
// });

router.get('/get',async (req,res)=>{
try{
    const result = await serv.find();
    res.send(result);
    console.log(req.body);
    console.log("showing details");
}catch(err){
    res.status(400).send(err);
}
});

router.get('/get/:id', async (req,res)=>{
    try{
        var id = req.params.id;
        const result = await serv.findById(id);
        if(result){
            res.send(result);
            console.log("showing details of particular id ");
        }
        res.status(500).send(error);

    }catch(err){
        res.status(400).send(err);
    }

});

router.post('/insert', async (req,res)=>{
        const parameters=new serv({
            "id":req.body.id,
            "name":req.body.name,
            "email":req.body.email,
            "age":req.body.age
        });
        try{
            const result = await parameters.save();
            res.send(result);
            console.log(req.body);
            console.log("inserted succesfuly");
        }catch(err){
        res.status(404).send(err);
        }

});

router.put('/update/:id',async(req,res)=>{
    const id=req.params.id;
    try{
        const upd=await serv.findByIdAndUpdate({_id:id},req.body);
        res.send(upd);
        console.log("details updated");
    }catch(error){

        res.status(400).send(error);
    }
});

router.delete('/delete/:id',async (req,res)=>{
    const id=req.params.id;
    try{
        const user=await serv.findByIdAndDelete(id);
        if(user){
            res.send(user);
            console.log("details deleted");

        }
        
    }catch(error){

        res.status(400).send(error);
    }
});

module.exports = router;