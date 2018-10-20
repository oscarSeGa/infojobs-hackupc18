const OAuth2Strategy = require('passport-oauth2').Strategy;

module.exports = function (passport) {

  passport.use(new OAuth2Strategy({
    authorizationURL: 'https://www.example.com/oauth2/authorize',
    tokenURL: 'https://www.example.com/oauth2/token',
    clientID: "EXAMPLE_CLIENT_ID",
    clientSecret: "EXAMPLE_CLIENT_SECRET",
    callbackURL: "http://localhost:3000/api/auth/example/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ exampleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

}
