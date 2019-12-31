const request = require('request')
const geoCode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


// geoCode('Austin', (error, data) => {
//     console.log('Error: ', error)
//     console.log('Data: ', data)
// })

forecast(-75,7088, 44.1545, (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})