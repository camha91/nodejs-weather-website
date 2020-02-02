const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
// 	if (req.method === 'GET') {
// 		res.send('GET requests are disabled')
// 	} else {
// 		next()
// 	}
// })

// app.use((req, res, next) => {
// 	res.status(503).send('Site is currently down. Check back soon!')
// })



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const jwt = require('jsonwebtoken')

const myFunction = async () => {
	const token = jwt.sign({ _id: 'abc123' }, 'thisismynodecourse', { expiresIn: '7 days' })
	console.log(token)

	const data = jwt.verify(token, 'thisismynodecourse')
	console.log(data)
}

myFunction()


app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

const Task = require('./models/tasks')
const User = require('./models/users')

const main = async () => {
	// const task = await Task.findById('5e367cde7db8f4123b5457a6')
	// await task.populate('owner').execPopulate()
	// console.log(task.owner)

	const user = await User.findById('5e367cde7db8f4123b5457a6')
	await user.populate('tasks').execPopulate()
	console.log(user.tasks)
}

main()