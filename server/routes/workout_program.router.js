const { response } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get 10 programs from database and delivers to ListOFTenProgram
router.get('/TenPrograms', (req, res) => {
    // GET route code here
    console.log('in /TenPrograms');
    const queryText = `SELECT 
        program.id,
        program.program_title, 
        "user".username as author,
        "workout_genre".genre  as genre
        FROM program
        JOIN "user" ON "user".id = program.author_user_id
        JOIN "workout_genre" ON "workout_genre".id = program.program_genre
        LIMIT 10;`;

    pool.query(queryText)
    .then( (response) => {
        console.log('Results:', response.rows);
        res.send(response.rows);
    })
    .catch((error) => {
        console.log('ERROR: in /TemPrograms', error);

        res.sendStatus(500);
    })
});

router.get('/userPrograms/', (req, res) => {
    // GET route code here
    console.log('in /TenPrograms');
    console.log('Req.user.id', req.user.id);
    const queryText = `SELECT 
        program.id,
        program.program_title, 
        "user".username as author,
        "workout_genre".genre  as genre
        FROM program
        JOIN "user" ON "user".id = program.author_user_id
        JOIN "workout_genre" ON "workout_genre".id = program.program_genre
        WHERE "user".id = $1
        ;`;

    pool.query(queryText, [req.user.id])
    .then( (response) => {
        console.log('Results:', response.rows);
        res.send(response.rows);
    })
    .catch((error) => {
        console.log('ERROR: in /TemPrograms', error);
        res.sendStatus(500);
    })
});


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
        console.log('ERROR: in workout_program.router /retrieveProgramId');
        res.sendStatus(500);
    })
});

router.get('/byId/:id', (req, res) => {
    // GET route code here
    console.log('in workout_program.router', req.params);
    const queryText = `Select * from "program" WHERE id = $1 Limit 1;`;

    pool.query(queryText, [req.params.id])
    .then( (response) => {
        console.log('Results:', response.rows);
        res.send(response.rows);
    })
    .catch(() => {
        console.log('ERROR: in workout_program.router /:id');
        res.sendStatus(500);
    })
});

router.get('/fetchById/:id', (req, res) => {
    // GET route code here
    console.log('in workout_program.router for fetch by ID');
    console.log('params: ', req.params.id);
    const queryText = `SELECT session_id, exercise_id, exercise_type, set_id, reps, percent_of_max FROM program_set 
                    WHERE program_id = $1
                    ORDER BY session_id, exercise_id, set_id;`;

    pool.query(queryText, [req.params.id])
    .then( (response) => {
        console.log('Results:', response.rows);
        res.send(response.rows);
    })
    .catch(() => {
        console.log('ERROR: in workout_program.router');
        res.sendStatus(500);
    })
});

router.get('/distinctExerciseIds/:programId/:sessionId', (req, res) => {
    // GET route code here
    console.log('in /distinctExerciseIds');
    console.log('params: ', req.params);
    const queryText = `SELECT distinct exercise_id, 
        "exercise_types".exercise_name, 
        exercise_type as exercise_type_id
        FROM program_set
        JOIN "exercise_types" ON "exercise_types".id = 
        program_set.exercise_type
        WHERE program_id = $1 AND session_id = $2;
        `;

    pool.query(queryText, [req.params.programId, req.params.sessionId])
    .then( (response) => {
        console.log('Results:', response.rows);
        res.send(response.rows);
    })
    .catch(() => {
        console.log('ERROR: in /distinctExerciseIds');
        res.sendStatus(500);
    })
});

router.get('/exerciseType/:programId/:sessionId/:exerciseId', (req, res) => {
    // GET route code here
    console.log('in /distinctExerciseIds');
    console.log('params: ', req.params);
    const queryText = `SELECT distinct exercise_name From exercise_types
    JOIN program_set ON program_set.exercise_type = exercise_types.id
    WHERE program_id=$1 AND session_id=$2 AND exercise_id=$3;
    
        `;

    pool.query(queryText, [req.params.programId, req.params.sessionId, req.params.exerciseId])
    .then( (response) => {
        console.log('Results:', response.rows);
        res.send(response.rows);
    })
    .catch(() => {
        console.log('ERROR: in /distinctExerciseIds');
        res.sendStatus(500);
    })
});

router.get('/setIds/:programId/:sessionId/:exerciseId', (req, res) => {
    // GET route code here
    console.log('in /distinctExerciseIds');
    console.log('params: ', req.params);
    const queryText = `SELECT set_id, reps, percent_of_max FROM program_set
    WHERE program_id=$1 AND session_id=$2 AND exercise_id=$3;
        `;

    pool.query(queryText, [req.params.programId, req.params.sessionId, req.params.exerciseId])
    .then( (response) => {
        console.log('Results:', response.rows);
        res.send(response.rows);
    })
    .catch(() => {
        console.log('ERROR: in /distinctExerciseIds');
        res.sendStatus(500);
    })
});

router.get('/setInfo/:programId/:sessionId/:exerciseId/:setId', (req, res) => {
    // GET route code here
    console.log('in /setInfo');
    console.log('params: ', req.params);
    const queryText = `SELECT reps, percent_of_max FROM program_set
    WHERE program_id=$1 AND session_id=$2 AND exercise_id=$3 AND set_id=$4;
        `;

    pool.query(queryText, [req.params.programId, req.params.sessionId, req.params.exerciseId, req.params.setId])
    .then( (response) => {
        console.log('Results:', response.rows);
        res.send(response.rows);
    })
    .catch(() => {
        console.log('ERROR: in /distinctExerciseIds');
        res.sendStatus(500);
    })
});

router.get('/exercises/:exerciseId', (req, res) => {
    // GET route code here
    console.log('in workout_program.router for fetch by exerciseIDs');
    console.log('params: ', req.body);
    const queryText = `SELECT distinct exercise_id FROM program_set
        WHERE program_id = 11 AND session_id = 1 AND exercise_id = 1;
        `;

    pool.query(queryText, [req.params.exerciseId])
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
        res.sendStatus(200);

    })
    .catch(error => {
        console.log('ERROR posting program entry: ', error);
        res.sendStatus(500);

    })
});

router.post('/insertProgramSet', (req, res) => {
    console.log('in workout_program.router for post set');
    console.log('req.body: ', req.body);
    const queryText = `INSERT INTO "program_set" (program_id, session_id, exercise_id, exercise_type, set_id, reps, percent_of_max)
    Values ($1, $2, $3, $4, $5, $6, $7);`;

    pool.query(queryText, [req.body.programId, req.body.sessionId, req.body.exerciseId, req.body.exerciseType, req.body.setId, req.body.reps, req.body.percentageOfMax])
    .then(() => {
        console.log('Successfully posted set of; ', req.body);
        res.sendStatus(200);

    })
    .catch((error) => {
        console.log('ERROR posting set: ', req.body);
        res.sendStatus(500);

    })
})

// updated set from review program
router.put('/updateSet/:programId/:sessionId/:exerciseId/:setId' , (req,res) => {
    console.log('in set update');
    console.log('body: ', req.body);
    console.log('params:', req.params);
    const queryText =`
    UPDATE program_set 
        SET reps = $1, percent_of_max=$2
        WHERE program_id = $3 AND session_id = $4 AND exercise_id = $5 AND set_id = $6;
    `;

    pool.query(queryText, [
        req.body.rep, 
        Number(req.body.percentOfMax),
        req.params.programId,
        req.params.sessionId,
        req.params.exerciseId,
        req.params.setId
    ])
    .then(() => {
        console.log('Successfully updated set');
        res.sendStatus(200);

    })
    .catch((error) => {
        console.log('ERROR updating set: ', error);
        res.sendStatus(500);
    })
})

router.put('/updateExerciseType/:programId/:sessionId/:exerciseId' , (req,res) => {
    console.log('in set update');
    console.log('body: ', req.body);
    console.log('params:', req.params);
    const queryText =`
    UPDATE program_set 
        SET exercise_type = $1
        WHERE program_id = $2 AND session_id = $3 AND exercise_id = $4;
    `;

    pool.query(queryText, [
        req.body.exerciseTypeId,
        req.params.programId,
        req.params.sessionId,
        req.params.exerciseId,
    ])
    .then(() => {
        console.log('Successfully updated exercise type');
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('ERROR updating set: ', error);
        res.sendStatus(500);

    })
})

router.delete('/deleteProgram/:programId', (req, res) => {
    console.log('in deleteProgram by id');
    console.log('body: ', req.body);
    console.log('params: ', req.params);
    console.log('userId: ', req.user.id);
    const queryText = `
        DELETE FROM "program" 
        WHERE program."id" = $1 AND program."author_user_id" = $2;
    `

    pool.query(queryText, [
        req.params.programId,
        req.user.id
    ])
    .then((response) => {
        console.log('Successful delete from program');
        const queryText =`
            DELETE FROM program_set
            WHERE program_id = $1;
        `

        pool.query(queryText, [
            req.params.programId
        ])
        .then ((response) => {
            console.log('Successful delete from program_set');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Failed to delete program_set', error);
            res.sendStatus(500);
        })
    })
    .catch((error) => {
        console.lof('Failed to delete program', error);
        res.sendStatus(500);
    })
})
module.exports = router;