const axios = require('axios');
function fetchPosts(url) {
    try {
      axios.get(url)
      .then((resp) => {
        const allData = resp.data;
        return allData;
      })
    } catch (err) {
      console.error(err.toJSON())
    }
  }
  
  module.exports = {
    fetchPosts
  }