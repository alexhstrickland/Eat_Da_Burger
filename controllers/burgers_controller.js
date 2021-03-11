const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

  router.get('/', (req, res) => {
    burger.all((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log('hbsObject', hbsObject);
      res.render('index', hbsObject);
    });
  });
  
  router.post('/api', (req, res) => {
    burger.create(['burger_name', 'devoured'], [req.body.name, req.body.devoured], (result) => {
      res.json({id: result.insertId});
    });
  });
  
  router.put('/api/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    console.log(condition);
  
    burger.update(
      {
        devoured: req.body.devoured,
      },
      condition,
      (result) => {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });
  
  // Export routes for server.js to use.
  module.exports = router;