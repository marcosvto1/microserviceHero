const mongoose = require('mongoose');

class Connection {
  constructor() {
    this.url = 'mongodb+srv://japaodev_root:46557985@cluster0.s2dso.mongodb.net/microservice?retryWrites=true&w=majority'
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