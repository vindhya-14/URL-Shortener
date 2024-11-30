const express = require('express');
const { connectToMongoDB } = require("./connect");
const urlRoute = require('./routes/url');
const app = express();
const PORT = 8001;
const URL = require('./models/url');

app.use(express.json());
app.use("/url", urlRoute);



connectToMongoDB('mongodb://localhost:27017/')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});























