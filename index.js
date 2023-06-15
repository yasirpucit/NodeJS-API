import 'dotenv/config';
import express from 'express';
// import https from 'https';
// import fs from 'fs';
// import path from 'path';

import setupDatabase from './config/database';
import applyMiddlewares from './middlewares';
import router from './routes';

const app = express();

setupDatabase();
applyMiddlewares(app);


app.use('/api', router);

// const keyPath = path.join(__dirname, 'cred', 'key.pem');
// const certPath = path.join(__dirname, 'cred', 'cert.pem');

// const options = {
//   key: fs.readFileSync(keyPath),
//   cert: fs.readFileSync(certPath)
// };

// const server = https.createServer(options, (req, res) => {
//   res.writeHead(200);
//   res.end('Hello, HTTPS!');
// });

// server.listen(443, () => {
//   console.log('HTTPS server is running on port 443');
// });

app.listen(process.env.PORT, () => {
  console.log(`app is listening to port ${process.env.PORT}`);
});

export default app;
