const express = require('express')

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Express app atop Digital ocean</h2>')
});

app.listen(5000, () => console.log(':> 5000'));

