const User = require('./../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtConfig = require('./../jwt-config');

exports.create_user = (req, res, next) => {
    User.find({ email: req.body.email }).exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'Email exists!'
                })
            } else {
                bcrypt.genSalt(10, (err, salt) => {
                    if (err) {
                        res.status(500).json({
                            error: err
                        })
                    } else {
                        bcrypt.hash(req.body.password, salt, function (err, hash) {
                            if (err) {
                                return res.status(500).json({
                                    error: err
                                })
                            } else {
                                const user = new User({
                                    _id: new mongoose.Types.ObjectId(),
                                    firstname: req.body.firstname,
                                    lastname: req.body.lastname,
                                    avatar: req.file.path,
                                    birthday: req.body.birthday,
                                    email: req.body.email,
                                    password: hash,
                                    phone: req.body.phone,
                                    address: req.body.address
                                });
                                user.save()
                                    .then(result => {
                                        console.log(result)
                                        res.status(201).json({
                                            message: 'User created!'
                                        })
                                    }).catch(err => {
                                        console.log(err);
                                        res.status(500).json({
                                            error: err
                                        })
                                    });
                            }
                        })
                    }
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
}

exports.user_login = (req, res, next) => {
    User.find({ email: req.body.email }).exec()
        .then(user => {
            if (user.length >= 1) {
                bcrypt.compare(req.body.password, user[0].password).then((result) => {
                    if (result) {
                        const token = jwt.sign({
                            email: user[0].email,
                            userId: user[0]._id
                        }, jwtConfig.JWT_KEY, {
                                expiresIn: '1h'
                            });
                        res.status(200).json({
                            message: 'Auth successful!',
                            token: token
                        })
                    } else {
                        res.status(409).json({
                            message: 'Auth faild!'
                        })
                    }
                })
            } else {
                return res.status(409).json({
                    message: 'Auth faild!'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
}

exports.delete_user = (req, res, next) => {
    User.remove({ _id: req.params.userId }).exec()
        .then(result => {
            res.status(200).json({
                message: 'User deleted!'
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}