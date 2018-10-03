const Mail = require('./../models/mail');
const mongoose = require('mongoose');

exports.mails_get_all = (req, res, next) => {
    // Mail.find()
    //     .select('mailsend mailreceive title content time status type')
    //     .exec()
    //     .then(docs => {
    //         const response = {
    //             count: docs.length,
    //             mails: docs.map(doc => {
    //                 return {
    //                     _id: doc._id,
    //                     mailsend: doc.mailsend,
    //                     mailreceive: doc.mailreceive,
    //                     title: doc.title,
    //                     content: doc.content,
    //                     time: doc.time,
    //                     status: doc.status,
    //                     type: doc.type,
    //                     request: {
    //                         type: 'GET',
    //                         url: 'http://localhost:3001/inbox/' + doc._id
    //                     }
    //                 };
    //             })
    //         }
    //         res.status(200).json(response);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json({
    //             error: err
    //         });
    //     });
}

exports.create_mail = (req, res, next) => {
    // const mail = Mail({
    //     _id: mongoose.Schema.Types.ObjectId,
    //     mailsend: req.body.mailsend,
    //     mailreceive: req.body.mailreceive,
    //     title: req.body.title,
    //     content: req.body.content,
    //     time: req.body.title,
    //     status: req.body.status,
    //     type: req.body.type
    // });
    // mail
    //     .save()
    //     .then(result => {
    //         console.log(result)
    //         res.status(201).json({
    //             message: "Created mail successfully",
    //             createdMail: {
    //                 _id: result._id,
    //                 mailsend: result.mailsend,
    //                 mailreceive: result.mailreceive,
    //                 title: result.title,
    //                 content: result.content,
    //                 time: result.title,
    //                 status: result.status,
    //                 type: result.type,
    //                 request: {
    //                     type: "GET",
    //                     url: "http://localhost:3000/inbox/" + result._id
    //                 }
    //             }
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json({
    //             error: err
    //         });
    //     }
    // );
}