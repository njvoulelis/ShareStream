// const Stream = require('../models/user.model');
// const getUserMedia = require('get-user-media-promise');
// const MicrophoneStream = require('microphone-stream');

// document.getElementById('my-strt-button').onclick = function() {
//     var micStream = new MicrophoneStream();
//     getUserMedia({ video:false, audio: true })
// }

module.exports = {
    getMain: (req, res) => {
        console.log("inside stream controller");
    }
}