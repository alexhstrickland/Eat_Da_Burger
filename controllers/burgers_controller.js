const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.selectAll((data) => {
      const results = {
       'burgers' : data,
      };
      console.log('results', results);
      res.render('index', results);
    });
  });
  
  router.post('/api/burgers', (req, res) => {
    burger.insertOne({'burger_name': req.body.burger_name}, (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put('/api/burgers/:id', (req, res) => {
  
    burger.updateOne(req.body, req.params.id, (result) => {
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