const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction, 
    deleteReaction,
} = require('../../Controllers/userController')

// /api/users
router.route('/').get(getAllThoughts).post(createThought);
router.route('/:userId').get(getOneThought).put(updateThought).delete(deleteThought)

// /api/users/:userId
router.route('/:userId.reaction/:reactionId').get(addReaction).delete(deleteReaction);

module.exports = router;