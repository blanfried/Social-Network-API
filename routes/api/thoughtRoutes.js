const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// GET all thoughts
router.route('/').get(getThoughts);
// POST a new thought
router.route('/').post(createThought);

// GET a single thought by its Id
router.route('/:thoughtId').get(getThoughtById);
// PUT an existing thought by its Id
router.route('/:thoughtId').put(updateThought);
// DELETE an existing thought by its Id
router.route('/:thoughtId').delete(deleteThought);


// POST a new reaction
router.route('/:thoughtId/reactions').post(createReaction);

// DELETE a reaction by its id
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;