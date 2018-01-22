/**
 * Created by a028515 on 22-01-2018.
 */


console.log("---Hello MBS---");


const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('-- Express is up !! --'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
