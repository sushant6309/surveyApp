/**
 * Created by apple on 26/05/18.
 */
if(process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}