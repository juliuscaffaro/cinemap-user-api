var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
var User = require('./User');


router.post('/', function (req, res) {
    console.log('receiving post')
    User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    },
    function (err, user) {
        if (err) return res.status(500).send("There was a problem adding the information");
        res.status(200).send(user);
    });
});
//RETURNS ALL THE USERS IN THE DATABASE

router.get('/', function (req, res) {
    console.log('receiving get')
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem");
        res.status(200).send(users);
    });    
});

module.exports = router;
