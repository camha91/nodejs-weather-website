// CRUD - create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID
console.log(id.id.length)
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //         name: 'Ethan',
    //         age: 25
    //     }, (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insert user!')
    //         }
    
    //         console.log(result.ops)
    //     })
    

    // db.collection('users').insertMany([
    //     {
    //         name: 'Kevin',
    //         age: 31
    //     }, {
    //         name: 'Crystal',
    //         age: 28
    //     }

    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the room',
    //         completed: true
    //     }, {
    //         description: 'Finish nodejs course',
    //         completed: false
    //     }, {
    //         description: 'Deploy apps to heroku',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks')
    //     }

    //     console.log(result.ops)
    // })
})
