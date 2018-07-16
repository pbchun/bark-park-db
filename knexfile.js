module.exports = {

  development: {
    client: 'pg',
    connection: 'postsql://localhost/barkparkdb'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}