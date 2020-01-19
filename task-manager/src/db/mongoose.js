const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manger-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    }, 
    age: {
        type: Number
    }
})

const kevin = new User({
    name: 'Kevin',
    age: 31
})

kevin.save().then(() => {
    console.log(kevin)
}).catch((error) => {
    console.log('Error!', error)
})