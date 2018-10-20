const OAuth2Strategy = require('passport-oauth2').Strategy;
const authURL = "https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=CV&client_id=84295ab9c5ff4c288339c77620f445c3&redirect_uri=YOUR_CALLBACK_URI&response_type=code";

module.exports = function (passport) {

  passport.use(new OAuth2Strategy({
    authorizationURL: authURL,
    tokenURL: 'https://www.infojobs.net/oauth/authorize',
    clientID: "84295ab9c5ff4c288339c77620f445c3",
    clientSecret: "sHART2lta/pwST4LD/ZmsJVVxCwuYqmXGQ41T+C2JKhtRQRpOq",
    callbackURL: "https://infojobshackupc2018.herokuapp.com/auth/infojobs/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.info("CALLBACK", accessToken, refreshToken, profile, cb);
    User.findOrCreate({ exampleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

}
