const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.send(JSON.stringify({
    //     value: 'Hello world',
    // }));

    res.sendStatus(404);
    console.log(res.statusMessage);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})