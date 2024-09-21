const { getAll, createUser, getOne, deleteUser, updateUsers } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
		.get(getAll)
        .post(createUser)

userRouter.route("/:id")
        .get(getOne) 
        .delete(deleteUser)  
        .put(updateUsers)    

module.exports = userRouter;