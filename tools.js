const crypto = require('crypto');

module.exports = {
   hash: function(unHashed) {
      let salt = "WilliamMasters1999";
      unHashed += salt;
      var hash = crypto.createHash("md5").update(unHashed).digest("hex");
      return hash;
   },

   createUserObject: function(user) {
      let returnUser = user;
      delete returnUser.password_hash;
      return returnUser;
   }
}
