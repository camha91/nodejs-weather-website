const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

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
		helpfulText: 'This is some helpful text'
	})
})


app.get('/weather', (req, res) => {
	res.send({
		forecast: 'It is sunny',
		location: 'Menlo Park, CA'
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

app.listen(3000, () => {
	console.log('Server is up on port 3000')
})