var functions = require('firebase-functions');
var admin = require('firebase-admin');
admin.initializeApp();

const tags = require('./apis/video-tags');



module.exports = {
    getTags: functions.https.onRequest(tags.get),
    searchTags: functions.https.onRequest(tags.search)

};




