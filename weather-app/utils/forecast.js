const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/96da7696e01c4ac384ba00ce9ee37089/${lat},${long}`
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature}. There is a  ${body.currently.precipProbability} % chance of rain.`)
        }
    })
}

module.exports = forecast