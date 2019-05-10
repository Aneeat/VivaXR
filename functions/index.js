var functions = require('firebase-functions');
var admin = require('firebase-admin');
admin.initializeApp();


const videos = require('./apis/videos');


module.exports = {
    getVideos: functions.https.onRequest(videos.get),
    searchVideos: functions.https.onRequest(videos.search)
};