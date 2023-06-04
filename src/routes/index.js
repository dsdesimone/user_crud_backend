const express = require('express');
const userRouter = require('./user.router');
const router = express.Router();

router.unsubscribe('/users', userRouter)


module.exports = router;