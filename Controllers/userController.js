const { User, Thought } = require('../models');

const userController = {
    // (GET FUNCTION) GET ALL USERS
    async getAllUsers (req, res) {
        try {
            const user = await User.find({});
            res.json(user)
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // (GET FUNCTION) FINDING ONE USER
    async getOneUser (req, res) {
        try {
            const user = await User.findOne({_id: req.params.userId});
            
            if (!user) {
                res.status(404).json({message: 'No user found with this ID'});
            } else {
                res.json(user);
            }
            
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // (POST FUNCTION) CREATE A NEW USER
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // (PUT FUNCTION) UPDATE A USER
    async updateUser(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
                new: true,
            });
            if (!user) {
                res.status(404).json({message: 'No user found with this ID to update!'});
            } else {
                res.json(user);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // (DELETE FUNCTION) DELETE A USER
    async deleteUser(req, res) {
        try {
            const user = await User.findByIdAndDelete({_id: req.params.userId});
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // ADD A FRIEND 
    async addFriend(req, res) {
        try {
            console.log("new friends id " + req.params.friendId)
            const addFriend = await User.findByIdAndUpdate(
                {_id: req.params.userId},
                {$push: {friends: req.params.friendId}},
                {new: true}
            )
            res.status(200).json(addFriend);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // DELETE A FRIEND
    async deleteFriend (req, res) {
        try {
            const deleteFriend = await User.findOneAndUpdate(
                {_id: params.userId},
                {$pull: {friends: params.friendId}},
                {new: true}
            );
            if (!deleteFriend) {
                return res.status(404).json({message: "No user found with this ID to update!"})
            }
        } catch (error) {
            res.statur(500).json(error)
        }
    } 
}; 

module.exports = userController;
