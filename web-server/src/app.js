const express = require ('express')
const app = express()


const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))


app.get('/weather', (req, res) => {
	app.send({
		forecast: 'It is sunny',
		location: 'Menlo Park, CA'
	})
})

app.listen(3000, () => {
	console.log('Server is up on port 3000')
})