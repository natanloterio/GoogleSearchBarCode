const robot = {
    translateBarcodeToName: require('./translator'),
}

const express = require('express')
const app = express()
const port = 80

app.get('/:b', (req, res) => barcodeToName(req,res) )

async function start() {
    const result = await robot.translateBarcodeToName('7804630540041')
    console.dir(result, {depth: null})
}

async function barcodeToName(req, res) {
    const barCode = req.params.b
    console.log(`Fetching up barcode: ${barCode}`)
    const result = await robot.translateBarcodeToName(barCode)
    res.send(result)
}


app.listen(port, () =>console.log(`Running on ${port}`))