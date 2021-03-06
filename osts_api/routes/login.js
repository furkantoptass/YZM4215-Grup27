var express = require('express');
var router = express.Router();
var ReverseMd5 = require('reverse-md5');

router.post('/', function (req, res, next) {

    //var postParams = req.body.data;
  var postParams = req.body;

  var querryParams = [postParams.username,  md5(postParams.password)];

    var sqlQuerry = 'CALL SP_LOGIN(?,?)';
    db.query(sqlQuerry, querryParams, function (err, results) {
        if (err) {
            res.json("database error")
            return;
        }
        try {
            console.log(querryParams);
            if (results.length > 0) {
                results[0][0]["login_password"]=postParams.password;
                res.json(results[0][0]);

                return;
            } else {
                res.json(0);
                return "";
            }
        } catch (ex) {
            res.json(-1);
            return ;
        }
    });

});

router.post('/passwordChange', function (req, res, next) {

    var postParams = req.body.data;
    var querryParams = [postParams.id, md5(postParams.old), md5(postParams.new)];
    var sqlQuerry = 'CALL SP_PASSWORD_CHANGE(?,?,?)';
    try {
        db.query(sqlQuerry, querryParams, function (err, results) {
                try {
                    if (results.affectedRows > 0) {
                        console.log('Password Has changed.');
                        res.json(true);
                    } else res.json(false);
                } catch (e) {
                    console.log(e);
                    console.log('Error while changing user password.');
                    res.json(0);
                }

            }
        );


    } catch (e) {
        console.log(e);

        res.json("Unauthorized User");
        return false;
    }

});


module.exports = router;
