var express = require('express');
var router = express.Router();


router.get('/List', function (req, res, next) {
  var getParams = req.params.classid;
  var sqlQuerry = 'CALL SP_LECTURES_LIST()';
  db.query(sqlQuerry, getParams, function (err, results) {
    try {
      res.json(results[0]);
      console.log("Lectures has sent");
      return;
    } catch (ex) {
      res.json(-1);
      return;
    }
  });

});
/*
router.post('/Add', function (req, res, next) {
  var postParams = req.body;
  var querryParams = [
    postParams.name,// ad
    postParams.lastname, // soyad
    postParams.mail,
    postParams.phone,
    postParams.class,//1 2 3 4 5 6 7 8
    postParams.username, // giriş adı
    postParams.password // giriş şifresi
  ]

  var sqlQuerry = 'CALL SP_STUDENT_ADD(?,?,?,?,?,?,?)';
  db.query(sqlQuerry, querryParams, function (err, results) {
    if (err) {
      res.json("database error")
      return;
    }
    try {
      if (results["0"].length>0) {
        res.json(results[0]);
        return;
      } else {
        res.json(0);
        return;
      }
    } catch (ex) {
      res.json(-1);
      return;
    }
  });

});

router.post('/Update', function (req, res, next) {
  var postParams = req.body;
  var querryParams = [
    postParams.id,// ad
    postParams.username, // giriş adı
    postParams.password, // giriş şifresi
    postParams.mail,
    postParams.phone,
    postParams.class,//1 2 3 4 5 6 7 8
  ]

  var sqlQuerry = 'CALL SP_STUDENT_UPDATE(?,?,?,?,?,?)';
  db.query(sqlQuerry, querryParams, function (err, results) {
    if (err) {
      res.json("database error")
      return;
    }
    try {
      if (results.affectedRows>0) {
        res.json(results[0]);
        return;
      } else {
        res.json(0);
        return;
      }
    } catch (ex) {
      res.json(-1);
      return;
    }
  });

});

router.delete('/Delete/:id',function (req,res,next) {
  var id=req.params.id;

  let sqlQuerry = `CALL SP_STUDENT_DELETE(?)`;
  let querryParams = [id];
  try {
    db.query(sqlQuerry, querryParams, function (err, results,fields) {
      if(results.affectedRows>0)
      {
        console.log('A student has deleted');
        res.json(true);
      }
      else
        res.json(false);
    });
  }
  catch (err){
    console.log("error while deleting a student."+err.message);
    res.json(-1);
  }


});
*/
module.exports = router;
