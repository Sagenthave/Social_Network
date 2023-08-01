const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction, 
    deleteReaction,
} = require('../../Controllers/thoughtsController')

// /api/users
router.route('/').get(getAllThoughts).post(createThought);
router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(deleteThought)

// /api/users/:userId
router.route('/:userId/reaction/:reactionId').post(addReaction);
// .delete(deleteReaction);

module.exports = router;