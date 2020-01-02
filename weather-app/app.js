
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log("Please enter an address!")
} else {
    geoCode(address, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log(error)
        } else {
            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return console.log(error)
                }
    
                console.log(location)
                console.log(forecastData)
            })
        }
        
    })    
}


