// CRUD - create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5e1fe87db76b8d745499a460")
    // }, {
    //     $set: {
    //         name: 'Lewis'
    //     }
    // }).then((resolve) => {
    //     console.log(resolve)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     name: 'Lewis'
    // }, {
    //     $inc: {
    //         age: -3
    //     }
    // }).then((resolve) => {
    //     console.log(resolve)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((resolve) =>{
        console.log(resolve)
    }).catch((error) =>{
        console.log(error)
    })
}) 