const StreamController = require('../controllers/stream.controller');
// const PlayerController = require('../../public/src/player');
module.exports = app => {
    app.get('/api/stream', StreamController.getMain);
    // app.get('/api/token', PlayerController.)
    // app.get('/login', function(req, res) {
    //     var scopes = 'user-read-private user-read-email';
    //     res.redirect('https://accounts.spotify.com/authorize' +
    //       '?response_type=code' +
    //       '&client_id=' + 'c3af92aa082542ba8d9c496fbee25c9e' +
    //       (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    //       '&redirect_uri=' + encodeURIComponent('http://localhost:4200/player'));
    //     });
}