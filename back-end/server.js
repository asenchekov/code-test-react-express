import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './routes';


const app = express();

app.use(bodyParser.json({ type: 'application/*+json' }))

app.use(express.static(path.join(__dirname, '../front-end/build')));

app.use(function (req, res, next) {
  console.log(req.method, req.url, req.path);
  next();
})

app.use(...routes);

app.use((request, response, next) => {
  response.sendFile(path.join(__dirname, '404page.html'));
});

app.listen(process.env.PORT || 8080);
