const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

  router.get('/', (req, res) => {
    burger.all((results) => {
      const hbsObject = {
        burgers: results,
      };
      console.log('hbsObject', hbsObject);
      res.render('index', hbsObject);
    });
  });
  
  router.post('/api/burgers', (req, res) => {
    burger.create({burger_name: req.body.burger_name }, results  => {
      if (results.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
  });
  
  router.put('/api/burgers/:id', (req, res) => {
    burger.update(req.body, req.paramas.id, results => {
        if (results.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });
  
  // Export routes for server.js to use.
  module.exports = router;