// importing all libraries
const { send, json } = require('micro')
const  { router, get, post } = require('microrouter')
const cors = ('micro-cors') ()

const db = require('monk')('mongodb://legendlcs:helio123@helio-training-shard-00-00-ie8ny.mongodb.net:27017,helio-training-shard-00-01-ie8ny.mongodb.net:27017,helio-training-shard-00-02-ie8ny.mongodb.net:27017/ecommerce?ssl=true&replicaSet=helio-training-shard-0&authSource=admin&retryWrites=true')
const products = db.get('products')


const getProducts = async (req, res) => {
    let results = await products.find({})
    console.log('results: ', results)
    send(res, 200, results)
}

const notfound = (req, res) => send(res, 404, 'Page not found')

// setting up routes
module.export = cors(
    router(
        get('/products', getProducts),
        get('/*', notfound)
    )
)

