const mysql = require('mysql')

require('dotenv').config();

console.log(process.env.DB_PASSWORD)

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '35.238.183.35',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'admin'
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;