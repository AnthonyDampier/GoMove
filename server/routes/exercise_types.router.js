const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('in workout_types.router');
  const queryText = `Select * from "exercise_types";`;
  pool.query(queryText)
  .then( (response) => {
      console.log('Results:', response.rows);
      res.send(response.rows);
  })
  .catch(() => {
      console.log('ERROR: in workout_types.router');
      res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
