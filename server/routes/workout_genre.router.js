const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
    console.log('in workout_genre.router');
    const queryText = `Select * from "workout_genre";`;

    pool.query(queryText)
    .then( (response) => {
        console.log('Results:', response.rows);
        res.send(response.rows);
    })
    .catch(() => {
        console.log('ERROR: in workout_genre.router');
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/',  rejectUnauthenticated,(req, res) => {
  // POST route code here
});

module.exports = router;