const google = require('googleapis').google
const customSearch = google.customsearch('v1')

async function fetchGoogleSearchAndReturnProductInfo(query) {
    const response = await customSearch.cse.list({
        auth: 'AIzaSyAg53eEWwIpJQt1cggbBMK5ItvSvg0F3H0',
        cx: '017908135223823607288:o5chdmqmxbb',
        //q: '7891098040688',
        //q: '7804630540041',
        q: query,
        num: 1
      })
      console.log(response);
      if(response.data.items){
        const produtcInfo = {
            title: response.data.items[0].title,
            image: response.data.items[0].pagemap.cse_image[0].src,
        }
  
        return produtcInfo;
      }else{
          return null;
      }

}

async function robot(barCode) {
    return fetchGoogleSearchAndReturnProductInfo(barCode)
}

module.exports = robot