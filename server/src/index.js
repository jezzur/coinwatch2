const express = require('express')
const dotenv = require('dotenv')
const fetch = require('node-fetch')
const cors = require('cors')


dotenv.config()
const app = express()
app.use(cors())
const PORT = 3333
const coinmarketcapUrl =
  'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const apiKey = process.env.COIN_MARKET_CAP_API_KEY

app.get('/ping', (req, res) => { console.log('pingged'); res.json('pong') });

app.get('/coincap', async (req, res) => {
  console.log(req.query)
  const clientQueries = `&sort=${req.query['sort']}&start=${req.query['start']}&cryptocurrency_type=${req.query['cryptocurrency_type']}&convert=${req.query['convert']}`
  console.log(clientQueries)
  let qString =
    '?CMC_PRO_API_KEY=' +
    apiKey +
    clientQueries;
  try {
    const response = await fetch(coinmarketcapUrl + qString);
    const data = await response.json();
    console.log({ data })
    return res.json(data)
  } catch (error) {
    return res.json({ error })
  }

})

app.listen(PORT, () => {
  console.log(`express app listening at http://localhost:${PORT}
  \nENV loaded: API_KEY: ${apiKey}`)
})