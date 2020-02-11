const axios = require('axios');
const URL = 'https://amazon-crawler-cci.herokuapp.com/amazon/';

module.exports = async function(barCode) {
    return axios.get(URL+barCode);
}