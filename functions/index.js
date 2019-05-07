const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.videos = functions.https.onRequest((request, response) => {
const videos = [{ 
    "video-id" : "01" , 
    "video-title" : "Sagrada Familia Interior" , 
    "video-description" : "Visit and Explore Catalan architect Antoni Gaudís Roman Catholic Church in Barcelona, Spain in honor of the holy family." ,
    "video-URL" : "https://youtu.be/kCFWmhUWeNs" ,
    "create-date": "05/02/2019" , 
    "modify-date": "05/02/2019" ,
    "long-description": "Visit and Explore Catalan architect Antoni Gaudís Roman Catholic Church in Barcelona, Spain in honor of the holy family." ,
    "author-id": "VIVA XR" ,
    "tag": "Travel"}
]



    response.send(videos);
})