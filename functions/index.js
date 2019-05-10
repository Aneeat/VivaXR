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
   "tag": "Travel",

   
     "video-id" : "02" , 
     "video-title" : "Sagrada Familia Church" , 
     "video-description" : "Visit and Explore Catalan architect Antoni Gaudís Roman Catholic Church in Barcelona, Spain in honor of the holy family." ,
     "video-URL" : "https://www.youtube.com/watch?v=O4_XzJFohiQ" ,
     "create-date": "05/02/2019" , 
     "modify-date": "05/02/2019" ,
     "long-description": "Visit and Explore Catalan architect Antoni Gaudís Roman Catholic Church in Barcelona, Spain in honor of the holy family." ,
     "author-id": "VIVA XR" ,
     "tag": "Travel",

      
        "video-id" : "03" , 
        "video-title" : "Rocky Mountains in Colorado" , 
        "video-description" : "Visit and Explore a mountain range that stretches more than 4,800 kilometers (3,000 mi) from the northernmost part of British Columbia, in western Canada, to New Mexico in the Southwestern United States." ,
        "video-URL" : "https://www.youtube.com/watch?v=yHtih_1pz-0" ,
        "create-date": "05/02/2019" , 
        "modify-date": "05/02/2019" ,
        "long-description": "" ,
        "author-id": "Steven Poe" ,
        "tag": "Travel" , "Nature":
    
           "video-id" : "04" , 
           "video-title" : "Rocky Mountains in Colorado" , 
           "video-description" : "Visit and Explore a mountain range that stretches more than 4,800 kilometers (3,000 mi) from the northernmost part of British Columbia, in western Canada, to New Mexico in the Southwestern United States." ,
           "video-URL" : "https://www.youtube.com/watch?v=yHtih_1pz-0" ,
           "create-date": "05/02/2019" , 
           "modify-date": "05/02/2019" ,
           "long-description": "" ,
           "author-id": "Steven Poe" ,
           "tag": "Travel",



           "video-id" : "05" , 
           "video-title" : "Monarch Butterflies" , 
           "video-description" : "In eye-popping 3D, National Geographic VR plunges you into the middle of a swarm of a billion monarch butterflies." ,
           "video-URL" : "https://www.youtube.com/watch?v=xmei3faE6F0" ,
           "create-date": "05/02/2019" , 
           "modify-date": "05/02/2019" ,
           "long-description": "National Geographic" ,
           "author-id": "" ,
           "tag": "Travel" , "Nature" , "Animals" :


           "video-id" : "06" , 
           "video-title" : "Polar Lights in Iceland" , 
           "video-description" : "The polar lights, more commonly known as the northern lights, occur as a result of solar activity: the sun throws out a great amount of its substance, and in a few days it reaches the upper layers of the Earth's atmosphere, rich with nitrogen and oxygen. In the polar regions of the Earth this "interaction" becomes visible and appears as colourful lights in the sky" ,
           "video-URL" : "https://www.youtube.com/watch?v=kvlx2chWQ8I&list=PLW4V8j--l-2LIxvlU6PzLV88BBCViX4gy" ,
           "create-date": "05/01/2019" , 
           "modify-date": "05/02/2019" ,
           "long-description": "" ,
           "author-id": "360 Air Pano" ,
           "tag": "Travel" , "Nature" :
    
           "video-id" : "07" , 
           "video-title" : "Swimming with Bears" , 
           "video-description" : "National Geographic VR takes you swimming in 360° with a gang of ravenous brown bears in a remote lake that's home to one of the richest salmon runs on Earth." ,
           "video-URL" : "https://www.youtube.com/watch?v=OkLa7jkFXpU" ,
           "create-date": "04/01/2019" , 
           "modify-date": "04/02/2019" ,
           "long-description": "" ,
           "author-id": "National Geographic" ,
           "tag": "Travel" , "Nature" , "Animals":


           "video-id" : "08" , 
           "video-title" : "Surrounded by White Lions" , 
           "video-description" : "Explore white lions and other animals on safari with the Intosol group." ,
           "video-URL" : "https://www.youtube.com/watch?v=14O7AxqjiVY" ,
           "create-date": "04/11/2019" , 
           "modify-date": "04/12/2019" ,
           "long-description": "" ,
           "author-id": "Intosol Group" ,
           "tag": "Travel" , "Nature" , "Animals":


           "video-id" : "09" , 
           "video-title" : "Angel Falls in Venezuela" , 
           "video-description" : "We present you the full version of our 360° video of Angel Falls — the highest waterfall in the world." ,
           "video-URL" : "https://www.youtube.com/watch?v=L_tqK4eqelA" ,
           "create-date": "04/11/2019" , 
           "modify-date": "04/12/2019" ,
           "long-description": "" ,
           "author-id": "Air Pano" ,
           "tag": "Travel" , "Nature" :

           "video-id" : "10" , 
           "video-title" : "Explore the Louvre and Paris" , 
           "video-description" : "TREXPLOR presents Inside The Louvr, Paris, France in VR (Short Part 1)
            The Louvre, also known as the Louvre Museum, is a central landmark of the city located on the Right Bank of the Seine in the city's 1st arrondissement. It's the world's largest museum and a historic monument in Paris, France.
            The Louvre is the world's 2nd most visited museum, receiving over 7 million visitors and counting. Around 38,000 objects from prehistory to the 21st century are on display." ,
           "video-URL" : "https://www.youtube.com/watch?v=I19gqLd-DcA" ,
           "create-date": "05/01/2019" , 
           "modify-date": "05/02/2019" ,
           "long-description": "" ,
           "author-id": "TREXPLOR" ,
           "tag": "Travel" , "Nature" :


           "video-id" : "11" , 
           "video-title" : "Explore Camp Nou of Barcelona" , 
           "video-description" : "Barcelona, Spain is located directly on the northeastern Mediterranean coast of Spain, with rich history to explore. It's exactly what one would expect from a European city - mouth-watering restaurants, amazing outdoor markets, shops galore, museums, churches, and of course Camp Nou.
           Camp Nou, with a​ ​capacity of 99,354, is the largest stadium in ​Spain and Europe, and the 3rd largest​ ​in the world in terms of capacity.​ ​Since its assembly in 1950, the stadium has hosted mega-popular events like the Summer Olympics, World Cup, Champions League finals, major concerts, and Pope John Paul II mass for a congregation of over 121,000. Camp Nou is currently undergoing a remodel to bring capacity to 105,000, with plans to add a canopy over the stands." ,
           "create-date": "05/01/2019" , 
           "modify-date": "05/02/2019" ,
           "long-description": "" ,
           "author-id": "TREXPLOR" ,
           "tag": "Travel" , "Sports" :

           "video-id" : "12" , 
           "video-title" : "Dreams of Salvador Dali" , 
           "video-description" : "Go inside and beyond Dali’s painting Archaeological Reminiscence of Millet’s Angelus and explore the world of the Surrealist master like never before in this mesmerizing 360° video. For an even more immersive experience, visit The Dali Museum in St. Petersburg, FL: the Virtual Reality experience is open daily from 11am-4pm (until 8pm on Thursdays) and is included with your admission to the Museum. Available worldwide for Oculus Rift & HTC Vive. For more, visit https://thedali.org/exhibit/dreams-vr/
           ©Salvador Dali Museum, Inc., St. Petersburg, FL. Worldwide rights ©Salvador Dali, Fundacio Gala-Salvador Dali. Created for The Dali by Goodby Silverstein & Partners, San Francisco, CA." ,
           "create-date": "05/01/2019" , 
           "modify-date": "05/02/2019" ,
           "long-description": "" ,
           "author-id": "The Dali Museum" ,
           "tag": "Travel" , "Arts" :


           "video-id" : "13" , 
           "video-title" : "Dreams of Salvador Dali" , 
           "video-description" : "Go inside and beyond Dali’s painting Archaeological Reminiscence of Millet’s Angelus and explore the world of the Surrealist master like never before in this mesmerizing 360° video. For an even more immersive experience, visit The Dali Museum in St. Petersburg, FL: the Virtual Reality experience is open daily from 11am-4pm (until 8pm on Thursdays) and is included with your admission to the Museum. Available worldwide for Oculus Rift & HTC Vive. For more, visit https://thedali.org/exhibit/dreams-vr/
           ©Salvador Dali Museum, Inc., St. Petersburg, FL. Worldwide rights ©Salvador Dali, Fundacio Gala-Salvador Dali. Created for The Dali by Goodby Silverstein & Partners, San Francisco, CA." ,
           "create-date": "05/01/2019" , 
           "modify-date": "05/02/2019" ,
           "long-description": "" ,
           "author-id": "The Dali Museum" ,
           "tag": "Travel" , "Arts" :


         
    




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
