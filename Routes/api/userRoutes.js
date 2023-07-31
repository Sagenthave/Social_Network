const router = require('express').Router();

const {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend, 
    deleteFriend,
} = require('../../Controllers/userController')

// /api/users
router.route('/').get(getAllUsers).post(createUser);
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser)

// /api/users/:userId
router.route('/:userId.friends/:friendId').get(addFriend).delete(deleteFriend);

module.exports = router;