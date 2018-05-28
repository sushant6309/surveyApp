/**
 * Created by apple on 26/05/18.
 */
const mongoos = require('mongoose');
const Schema = mongoos.Schema;

const UserSchema = new Schema({
  googleId: String,
  name: String,
  firstName: String,
  lastName: String,
  avatar: String,
  accessToken: String,
});

mongoos.model('users', UserSchema);