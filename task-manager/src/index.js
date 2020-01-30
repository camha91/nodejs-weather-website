const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const bcrypt = require('bcrypt')

const myFunction = async () => {
	const password = 'Green12345!'
	const hashedPassword = await bcrypt.hash(password, 8)
	
	console.log(hashedPassword)
	
	const isMatch = await bcrypt.compare('Green12345!', hashedPassword)
	console.log(isMatch)
}

myFunction()


app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})