
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

module.exports = {
    getVideos :  getFn,
    searchVideos : searchFn
};