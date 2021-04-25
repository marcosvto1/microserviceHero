const mongoose = require('mongoose');

const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();

class Connection {
  constructor() {
    //this.url = `${process.env.CONNECT_STIRNG}`
  }

  async connect() {

    this.url = await mongod.getUri();

    console.log(this.url)
    
    mongoose.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true })
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connect errro'))

    db.on('open', () => {
      console.log('connected')
    })
  }
}

module.exports = new Connection();