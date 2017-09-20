'use strict'

module.exports = function(models) {

  const index = function(req, res) {

    models. numberPlate.find({}, function(err, results) {
      if (err) {
        return next(err);
      } else {
        res.render('index.handlebars', {
          licenceNum: results

        })
      }
    })
  };


  const createReg = function(req, res, next) {
    var plate = req.body.registration;
    var regNum = {
      registration: plate.substr(0, 2).toUpperCase() + ' ' + plate.substr(
        2).toLowerCase()
    }
    if ((!regNum || !regNum.registration) || !plate) {
      req.flash('error', 'Please enter Registration Number!')
      res.redirect('/')
    } else {
      models. numberPlate.create(regNum, function(err, results) {
        if (err) {
          if (err.code === 11000) {
            req.flash('error',
              'You cannot add same registration number!')
            res.redirect('/')
          } else {
            return next(err)
          }
        } else {
          req.flash('success', 'Registration Number Added!')
          res.redirect('/')
        }
      })
    }
  };

  const filter = function(req, res, next) {
    var radioValue = req.body.num;
    models.numberPlate.find({
      registration: {
        $regex: "radioValue",
        $options: "x"
      }
    }, function(err, results) {

      if (err) {
        return next(err);
      } else {
        res.render('index.handlebars', {
          filtered: results
        })
      }
    })
  }


  return {
    index,
    createReg,
    filter
  }

}
