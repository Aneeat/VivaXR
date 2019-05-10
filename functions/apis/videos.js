
var admin = require("firebase-admin");
var db = admin.database();
var ref = db.ref("videos");


var getFn = (request, response) => {
ref.orderByChild("_videos")
.on("value", (data) => {
response.send(data.val());
});

};

var searchFn = (request, response) => {
ref.orderByChild("video-title").equalTo(search).on("value", (data) => {
response.send(data.val());
});
    
};

const videos = 
require('./apis/videos');

module.exports = {
    getVideos :  functions.https.onRequest(videos.get),
    searchVideos : functions.https.onRequest(videos.search)
};