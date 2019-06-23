var cors = require('cors')({origin: true });



var admin = require("firebase-admin");

// Get the database for our logins
var db = admin.database();
var ref = db.ref("video-tags");


const getFn = (request, response) => {
//CORS
return cors(request, response, () => {

  ref.orderByChild("video-tags")
    .on("value", (data) => {
      response.send(data.val());
    });
});
};  


    const searchFn = (request, response) => {

    //CORS
    return cors(request, response, () => {
      const search = request.body.search;
      ref.orderByChild("video-tags").equalTo(search).on("value", (data) => {
          response.send(data.val());
    });
  });
};
       
    


module.exports = {
    get : getFn,
    search : searchFn
}


