/**
 * Created by apple on 26/05/18.
 */
const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/current_user', (req, res) =>{
    res.send(req.user);
  });

  app.get('/api/sushant', (req, res) => {
    res.send({"name": 'sushant'});
  });

  app.get('/api/logout', (req, res) =>{
    req.logout();
    res.send(req.user);
  });
};