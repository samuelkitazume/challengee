var express = require('express'),
    Hashids = require('hashids'),
    challenge = express.Router();

var ChallengeModel = require('./../../infra/challenge'),
    hashids = new Hashids('challengee', 8);

challenge.route('/all')
    .get((req, res) => {
        ChallengeModel.find({ challenger: res.locals.userId }, (err, challenges) => {
            if (err) res.status(500).json({ message: 'Something went wront :(' });
            res.json({ data: challenges });
        })
    });

challenge.route('/:hash')
    .get((req, res) => {
        ChallengeModel.find({ hash: req.params.hash }, (err, challengeFound) => {
            if (err) res.status(404).json({ message: 'No challenge found' });
            res.json(challengeFound);
        });
    });

challenge.route('/')
    .get((req, res) => {
        res.json({ message: 'You are hitting the challenge' });
    })
    .post((req, res) => {
        ChallengeModel.countDocuments({}, (errCounting, count) => {
            ChallengeModel.create({
                challenger: res.locals.userId,
                category: req.body.category,
                hash: hashids.encode(count),
                status: 0
            }, (errCreating, newChallenge) => {
                res.json({ message: 'New challenge created', challenge: newChallenge });
            })
        })
    });

module.exports = challenge;