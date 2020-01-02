const https = require('https')
const url = 'https://api.darksky.net/forecast/96da7696e01c4ac384ba00ce9ee37089/40,-72'

const request = https.request(url, (response) => {
    let data = ''
    
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log(error)
})

request.end()