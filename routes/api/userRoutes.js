const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriendById,
} = require('../../controllers/userController');

// GET all users route
router.route('/').get(getAllUsers);
// POST a new user to the db route
router.route('/').post(createUser);

// GET a user by its ID
router.route('/:userId').get(getUserById);
// PUT and update a user by its ID
router.route('/:userId').put(updateUser);
// DELETE a user by its ID
router.route('/:userId').delete(deleteUser);

/* -------------- /api/users/:userId/friends/:friendId endpoint ------------- */
// POST and update a friend by it's associated user ID and friend ID
router.route('/:userId/friends/:friendId').post(addFriend);
// DELETE a friend by it's associated user ID and friend ID
router.route('/:userId/friends/:friendId').delete(deleteFriendById);

module.exports = router;