const mongoose = require('mongoose');

class Connection {
  constructor() {
    this.url = 'mongodb://localhost/microservice'
  }

  connect() {
    mongoose.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true })
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connect errro'))

    db.on('open', () => {
      console.log('connected')
    })
  }
}

module.exports = new Connection();