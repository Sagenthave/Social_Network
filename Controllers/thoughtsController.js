const { User, Thought } = require('../models');

const thoughtController = {
    // (GET FUNCTION) GET ALL THOUGHTS
    async getAllThoughts (req, res) {
        try {
            const thought = await Thought.find({});
            res.json(thought)
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // (GET FUNCTION) FINDING ONE THOUGHT
    async getOneThought (req, res) {
        try {
            console.log("=======================================" + req.params.thoughtId)
            const thought = await Thought.findOne({_id: req.params.thoughtId});
            if (!thought) {
                res.status(404).json({message: 'No thought found with this ID'});
            } else {
                res.json(thought);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // (POST FUNCTION) CREATE A THOUGHT
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.status(200).json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // (PUT FUNCTION) UPDATE A THOUGHT
    async updateThought(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
                new: true,
            });
            if (!thought) {
                res.status(404).json({message: 'No thought found with this ID to update!'});
            } else {
                res.json(thought);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // (DELETE FUNCTION) DELETE A THOUGHT
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete({_id: req.params.thoughtId});
            res.status(200).json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // ADD A REACTION TO ONE THOUGHT ?????
    async addReaction(req, res) {
        try {
            const addReaction = await Thought.findOndAndUpdate(
                {_id: req.params.thoughtId},
                {
                    $push: {
                        reactions: req.body
                    }
                }, 
                {new:true}
            )
            res.status(200).json(addReaction)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    //DELETE A REACTION ASSCOIATED TO ONE THOUGHT ????

}; 

module.exports = thoughtController;
