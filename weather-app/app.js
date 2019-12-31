const request = require('request')

const url_1 = 'https://api.darksky.net/forecast/96da7696e01c4ac384ba00ce9ee37089/37.8267,-122.4233?lang=ja'


request({ url: url_1, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service')
    } else if (response.body.error) {
        console.log('Unable to find location!')
    } else {
        console.log(`${response.body.daily.data[0].summary}. It is currently ${response.body.currently.temperature} degrees outside. There is a ${response.body.currently.precipProbability} % chance of rain.`)

    }
})

const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2FtaGE5MSIsImEiOiJjazRybDQybHEyaDE5M2ttcjg1czNqajdqIn0.6QtAKATPSmN_jGpkBkieLQ&limit=1'


request({ url: geoCodeURL, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to location service')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location! Try another search')
    } else {
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
        console.log(longitude, latitude)
    }
    
})
