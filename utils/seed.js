const connection = require('../Config/connection');
const thought = require('../Models/thought');
const user = require('../Models/user');
const userData = require('./userData');
const thoughtData = require('./thoughtData');

connection.on('error', (err) => {
    console.log('error connecting')
});

connection.once('open', async () => {
    console.log('connected');

    try {
    await user.deleteMany({});
    await thought.deleteMany({});

    await thought.insertMany(thoughtData);
    await user.insertMany(userData);
    } catch (error) {
      console.log(error)
    }
  console.info('Seeding complete! 🌱');
  process.exit(0);
});


