const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('../config.js');
const axios = require('axios');


const app = express();


// make sure before deployment we create an .env file and make this process.env.PORT;
const port = 3000;
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, ".." ,"/client/dist")));
app.use(bodyParser.json());

app.use(express.json());

// here is the api link if we need it
// https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfe/


// this is Victors section



// this is Ratings & Reviews section
app.get('/api/reviews', (req, res) => {
  // console.log(req.url);
  const { page, count, sort, product_id } = req.query;

  // Set default values if not provided
  // const pageNumber = page || 1;
  // const reviewsPerPage = count || 5;
  // const sortOption = sort || 'newest';
  const headers = {
    Authorization: `${config.api_key}`
  };

  // Make a request to the Atelier Reviews API
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews`, {
    params: {
      // page: pageNumber,
      // count: reviewsPerPage,
      // sort: sortOption,
      product_id: 37311
    },
    headers: headers
  })
    .then(response => {
      const reviews = response.data.results;

      if (reviews.length > 0) {
        res.json({ reviews: reviews });
      } else {
        res.status(404).json({ error: 'Product reviews not found' });
      }
    })
    .catch(error => {
      console.error('Error fetching reviews:', error);
      res.status(500).json({ error: 'An error occurred while fetching reviews' });
    });
});



// this is  Heith section


app.get('/', (req,res) => {
  res.send('test')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})