const robot = {
    translateBarcodeToName: require('./translator'),
}

async function start() {
    const result = await robot.translateBarcodeToName('7804630540041')
    console.dir(result, {depth: null})
}

start()