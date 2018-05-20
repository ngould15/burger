var express = require('express');
var routes = express.Router();
var burger = require('../models/burger.js');

//select all
routes.get('/', function(req, res){
        burger.all(function(data){
            var allBurgers = {
                burgers: data
            };
            // res.send('hello out there.');
         res.render('index', allBurgers);
                // console.log(allBurgers);
        });
       
    });
//insert
routes.post('/add_a_burger',function(req, res){
    var newBurger = req.body.val.toString();
    burger.create({'burger_name': newBurger},function(data){
        res.json({ id: data.insertId });
        
        // console.log(data.insertId);
        });
    });
//update
routes.post('/devour_a_burger', function(req, res){
    var col = {'devoured': 1};
    var id = parseInt(req.body.row);
    console.log(id);
       var row = {'id': id};
    console.log(col);
    console.log(row);
        burger.update(col,row,function(data){
            console.log(req.body.burger_name + 'was devoured');
        });
       
    });

module.exports = routes;

