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
            const user = await User.findOne({_id: req.params.UserId});
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
            const user = await User.findByIdAndUpdate(req.params.userID, req.body, {
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
}; 

module.exports = userController;
