// CRUD - create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID("5e1fe846b754c77444c31f6c") }, (error, user) => {
    //     if (error) {
    //         console.log('Unable to fetch!')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 28}).count((error, count) => {
    //     console.log(count)
    // })

    db.collection('tasks').findOne({ _id: new ObjectID("5e1fee5ded1a717484646be2")}, (error, task) => {
        console.log(task)
    })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })
   
}) 
