import mysql from 'serverless-mysql'

export const conn = mysql({
  config: {
    host: 'localhost',
    user: 'root',
    password: 'jona321',
    port: 3306,
    database: 'seekservicescrud',
  },
})
