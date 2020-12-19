export default {
  port: process.env.PORT || 8080,
  dbUrl: process.env.DB_URL || 'mongodb+srv://adauto:adauto@cluster0-rven8.mongodb.net/test?retryWrites=true&w=majority',
  dbName: process.env.DB_NAME || 'ec021-av2-core',
  authUrl: process.env.AUTH_URL || 'https://ec021-av2-auth.herokuapp.com/auth'
}
