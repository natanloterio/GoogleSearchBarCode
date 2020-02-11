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
    const result = await robot.translateBarcodeToName(barCode)
    result.ratings = await robot.amazon(barCode);
    
    res.send(result)
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
    if(err) throw err;
    console.log("%c Server running", "color: green");
});