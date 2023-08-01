const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction')

const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        requires: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
},{
        toJSON:{
            virtuals:true,
            getters:true
        },
        id:false
    
    })
    thoughtSchema.virtual("reactionCount").get(function(){
        return this.reactions.length
    })
     const Thought = model("thoughts",thoughtSchema);
    
     module.exports = Thought;
// });


// thoughtSchema.virtual("reactionCount").get(function(){
//     return this.reactions.length
// })
//  const Thought = model("thought",thoughtSchema);

//  module.exports = Thought;
