import express from 'express';
import { v4 as uuidv4 } from 'uuid';
 
const router = express.Router();
 
let users = [];

router.get('/',(req,res)=>{
    res.send(users);
})

router.post("/",(req,res)=>{ 

    const newUser = {...req.body,  id  : uuidv4()} ;

    users.push(newUser);

    res.status(201).json({success: true, payload: newUser})
});

router.get("/:id", (req, res)=>{

    const searchUserID = req.params.id; 

    const searchUser = users.find(user => user.id === searchUserID);

    if(searchUser){
        res.status(200).json({success : true, payload : searchUser});
    }
    else{
        res.status(401).json({success : false, payload : 'No user found'});
    }
    
});

router.delete("/:id",(req,res)=>{

    const userID = req.params.id; 

    users = users.filter(user => user.id !== userID);

    res.status(200).json({success : true, payload : users});


});

router.patch(("/:id"),(req,res)=>{

    const userID = req.params.id; 

    const user = users.find(user => user.id === userID);

    const {firstName,lastName,age} = req.body; 

    if(firstName) user.firstName = firstName;

    if(lastName) user.lastName = lastName;

    if(age) user.age = age;

    res.status(200).json({success : true, payload : user});


})

export default router;