const TOPIC = 'docker';

module.exports = {
  topics: [{
    name: TOPIC,
    description: 'Develop for Heroku locally, with Docker'
  }],
  commands: [
    require('./commands/install')(TOPIC),
    require('./commands/create')(TOPIC),
    require('./commands/run')(TOPIC),
    require('./commands/build')(TOPIC),
    require('./commands/release')(TOPIC)
  ]
};
