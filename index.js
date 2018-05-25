/**
 * Created by apple on 26/05/18.
 */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({
    "msg": "Node Started",
  });
});

app.listen(5000);