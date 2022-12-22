const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  // GET route code here
    console.log('in workout_program.router');
    const queryText = `Select * from "program";`;

    pool.query(queryText)
    .then( (response) => {
        console.log('Results:', response.rows);
        res.send(response.rows);
    })
    .catch(() => {
        console.log('ERROR: in workout_program.router');
        res.sendStatus(500);
    })
});

router.get('/retrieveProgramID', (req, res) => {
    // GET route code here
    console.log('in workout_program.router /retrieveProgramID');
    //retrieves most recent entry from current users
    const queryText = `SELECT * from "program" 
                    WHERE author_user_id = $1 
                    ORDER BY id DESC 
                    LIMIT 1;`;

    pool.query(queryText, [req.user.id])
    .then( (response) => {
        console.log('Results:', response.rows);
        res.send(response.rows);
    })
    .catch(() => {
        console.log('ERROR: in workout_program.router');
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/EnterProgram', (req, res) => {
  // POST route code here
    console.log('in workout_program.router for post');
    // receiving {numOfSessions: #, title: 'abc', workoutGenre: #}
    console.log('req.body', req.body);
    console.log('req.user:', req.user);
    const queryText =`Insert into "program" 
        ("program_title", "author_user_id", "program_genre", "num_of_sessions")
        VALUES ($1, $2, $3, $4);`;
    
    pool.query(queryText, [req.body.title, req.user.id, req.body.workoutGenre, req.body.numOfSessions])
    .then(() => {
        console.log('Successful post of: ', req.body.title, ' by ', req.user.id);
    })
    .catch(error => {
        console.log('ERROR posting program entry: ', error);
    })
});

module.exports = router;