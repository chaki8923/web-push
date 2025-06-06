import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/save-sub', (req,res) => {
  fs.writeFileSync('subscription.json', JSON.stringify(req.body, null, 2));
  res.sendStatus(201);
});

app.listen(3000, () => console.log('▶ http://localhost:3000 を開いてください'));
