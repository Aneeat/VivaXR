const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

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