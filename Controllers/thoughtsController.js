const { User, Thought } = require('../models');

const thoughtController = {
    // (GET FUNCTION) GET ALL THOUGHTS
    async fillAllThoughts (req, res) {
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
            const thought = await Thought.findOne({_id: req.params.thoughId});
            if (!thought) {
                res.status(404).json({message: 'No thought found with this ID'});
            } else {
                res.jjson(thought);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    //CREATE A THOUGHT
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.status(200).json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // UPDATE A THOUGHT
    async updateThought(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtID, req.body, {
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
    // DELETE A THOUGHT
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete({_id: req.params.thoughtId});
            res.status(200).json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // ADD A REACTION TO ONE THOUGHT



    //DELETE A REACTION ASSCOIATED TO ONE THOUGHT
}; 

module.exports = thoughtController;
