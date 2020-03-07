const robot = {
    translateBarcodeToName: require('./translator'),
    amazon: require('./amazon'),
}

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => res.send('wow'))
app.get('/:b', (req, res) => barcodeToName(req,res) )

async function start() {
    const result = await robot.translateBarcodeToName('7804630540041')
    console.dir(result, {depth: null})
}

async function barcodeToName(req, res) {
    const barCode = req.params.b
    console.log(`Fetching up barcode: ${barCode}`)
    var result = {}
    try {
        var searchResult = await robot.translateBarcodeToName(barCode)
        if(searchResult){
            result = searchResult;
        }else{
            res.status(404).send({})
            return
        }

    } catch (error) {
        console.log(error)
    }
    
    try {
        result.rating = await robot.amazon(barCode);    
        result.id = await robot.firebas
    } catch (error) {
        console.log('Amazon not responding')
    }
    
    console.log(result)
    res.send(result)
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
    if(err) throw err;
    console.log("%c Server running", "color: green");
});