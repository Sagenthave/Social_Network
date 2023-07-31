const connection = require('../Config/connection');
const { User, Thought, Reaction } = require("../Models");

connection.on('error', (err) => {
    console.log('error connecting')
});

connection.once('open', async () => {
    console.log('seeds connected');

    //DROP EXISTING USERS
    await User.deleteMany({});
    //DROP EXISITING THOUGHTS
    await Thought.deleteMany({});
    //DROP EXISTING REACTIONS
    await Reaction.deleteMany({});

    await Thought.insertMany(thoughtSeed);
    await User.insertMany(userSeed);

      // Log out the seed data to indicate what should appear in the database
  console.table(students);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});


