const express = require('express')
const HelloWordService = require( "./services/hello-world" );

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/:nameToSalute', (req, res) => {
  res.send(new HelloWordService().greet(req.params.nameToSalute));
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
module.exports = app