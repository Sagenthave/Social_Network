const {Schema, model, Types} = require('mongoose');
// const thought = require('./thought');

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
            }
        }
    },
    thought: [{
        type: Schema.Types.ObjectId,
        ref: 'thought',
    }],
    friends: [{
        type:Schema.Types.ObjectId,
        ref: 'user'
    }],
}, {
    toJSON: {
        virtuas:trusted,
    },
    id: false
});

userSchema.virtual("friendsCount").get(function(){
    return this.friends.length
})
 const User = model("user",userSchema);

 module.exports = User;