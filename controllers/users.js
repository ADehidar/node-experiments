import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getAllUsers = (req,res)=>{
    res.send(users);
}

export const addUser = (req,res)=>{

    const newUser = {...req.body,  id  : uuidv4()} ;

    users.push(newUser);

    res.status(201).json({success: true, payload: newUser})
}

export const getUserByID = (req,res)=>{
    
    const searchUserID = req.params.id; 

    const searchUser = users.find(user => user.id === searchUserID);

    if(searchUser){
        res.status(200).json({success : true, payload : searchUser});
    }
    else{
        res.status(401).json({success : false, payload : 'No user found'});
    }
}

export const deleteUserByID = (req,res)=>{

    const userID = req.params.id; 

    users = users.filter(user => user.id !== userID);

    res.status(200).json({success : true, payload : users});
}

export const updateUserByID = (req,res)=>{

    const userID = req.params.id; 

    const user = users.find(user => user.id === userID);

    const {firstName,lastName,age} = req.body; 

    if(firstName) user.firstName = firstName;

    if(lastName) user.lastName = lastName;

    if(age) user.age = age;

    res.status(200).json({success : true, payload : user});
}