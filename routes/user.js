const express = require('express');
const userController = require('./../controllers/user');
const upload = require('./../middleware/upload');
const auth = require('./../middleware/auth');
const router = express.Router();

router.post('/signup', auth, upload.single('avatar'), userController.create_user);
router.post('/login', userController.user_login)
router.delete('/:userId', userController.delete_user);

module.exports = router;