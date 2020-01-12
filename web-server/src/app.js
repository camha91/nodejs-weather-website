const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const port = process.env.PORT || 3000

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather App',
		name: 'Camha Nguyen'
	})
})

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Me',
		name: 'Camha Nguyen'
	})
})

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
		helpfulText: 'This is some helpful text',
		name: 'Camha Nguyen'
	})
})

app.get('/weather', (req, res) => {
	if (!req.query.address) {
		return res.send({
			error: "Please provide address!"
		})
	}

	geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
		if (error) {
			return res.send({ error })
		}

		forecast(latitude, longitude, (error, forecastData) => {
			if (error) {
				return res.send({ error })
			}

			res.send({
				forecast: forecastData,
				location,
				address: req.query.address
			})
		})
	})
})


app.get('/products', (req, res) => {
	if (!req.query.search) {
		return res.send({
			error: "Please provide a search term!"
		})
	}
	res.send({
		products: []
	})
})

app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404',
		errorMessage: 'Help Article Not Found.',
		name: 'Camha Nguyen'
	})
})

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		errorMessage: 'Page not found.',
		name: 'Camha Nguyen'
	})
})

app.listen(port, () => {
	console.log(`Server is up on port ${port}`)
})