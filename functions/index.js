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
});


exports.tags = functions.https.onRequest((request, response) => {
    const tags =  
[  
    {  
       "tag":"Music",
       "videoID":"0001"
    },
    {  
       "tag":"Nature",
       "videoID":"0002"
    },

    { 
        "tag":"Travel",
        "videoID":"0003"
     },

     {  
        "tag":"Educational",
        "videoID":"0004"
     },

     {  
        "tag":"Most Viewed",
        "videoID":"0002"
     },

     {  
        "tag":"Art",
        "videoID":"0002"
     },

     {  
        "tag":"Arts",
        "videoID":"0002"
     },

     {  
        "tag":"Sports",
        "videoID":"0002"
     },

     {  
        "tag":"Latest",
        "videoID":"0002"
     },

     {  
        "tag":"Dance",
        "videoID":"0002"
     },

     {  
        "tag":"Animals",
        "videoID":"0002"
     },

     {  
        "tag":"Most Recent",
        "videoID":"0002"
     },

     {  
        "tag":"Science",
        "videoID":"0002"
     }

 ]
 
 
 response.send(tags);
})
