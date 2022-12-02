import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://Sangam:12345@cluster0.we8pnrd.mongodb.net/test';
const PORT = process.env.PORT || 5000;


const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(CONNECTION_URL, options)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
