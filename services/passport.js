/**
 * Created by apple on 26/05/18.
 */
const passport = require('passport');
const googeStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});


passport.use(
  new googeStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {

      User.findOne({googleId: profile.id})
        .then((existingUser) => {
          if(existingUser) {
            done(null, existingUser);
          } else {
            let newUser = new User({
              googleId: profile.id,
              name: profile.displayName,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              avatar: profile.photos[0].value,
              accessToken: accessToken,
            });
            newUser
              .save()
              .then(newUsr=> {
                done(null, newUsr);
              });
          }
        });
      console.log(profile);
  })
);