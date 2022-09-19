import express from 'express';
import {addUser,getUserByID,deleteUserByID,updateUserByID,getAllUsers} from '../controllers/users.js'
 
const router = express.Router();
 
router.get('/',getAllUsers);

router.post("/",addUser);

router.get("/:id", getUserByID);

router.delete("/:id",deleteUserByID);

router.patch(("/:id"),updateUserByID)

export default router;