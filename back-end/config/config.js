const config = {
    host: 'http://localhost:9999',
    port: process.env.PORT || 9999,
    dbURL: 'mongodb://localhost:27017/movieLibrary',
    authCookieName: 'x-auth-token',
    api: 'http://api.tvmaze.com/search/shows'
}

module.exports = config