var express=require('express');
var router=express.Router();
var model=require('../models');
var config=require('../config');

router.get('/', function( req, res, next ) {
  Promise.all([model.Hotel.find().exec(),model.Restaurant.find().exec(),model.Activity.find().exec()])
  .then(function(results){
    res.render('index', {hotels:results[0], restaurants:results[1], activities:results[2], config:config })
  })
} );

module.exports=router;