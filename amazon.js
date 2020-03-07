const axios = require('axios');
const address = 'https://amazon-crawler-cci.herokuapp.com/amazon/';

async function amazon(barCode) {
    try{
        var URL = address + barCode
        console.log(URL)
        var retorno = await axios.get(URL,
            { headers: { 'User-Agent': 'Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0' }  } );
        console.log(retorno.data)
        return retorno.data.ratings

    } catch (error) {
        console.error(error)
        return null
    }
}

module.exports = amazon
