const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.static('../client/build'));

const url = 'https://itunes.apple.com/search?term=';
app.get('/search', (req, res) => {
 let search = '';
 if (req.query.search) {
  search = req.query.search.replace(new RegExp(' ', 'g'), '+');
 }
 const getData = async url => {
  try {
   const retObj = {};
   const response = await axios.get(url + search);
   const data = response.data;
   data.results.forEach(result => {
    if (retObj[result.kind]) {
     retObj[result.kind].push(result);
    } else {
     retObj[result.kind] = [result];
    }
   });
   res.send(retObj);
  } catch (error) {
   console.log(error);
  }
 };
 getData(url);
});

app.listen(3001, () => {
 console.log('listening on port 3001');
});
