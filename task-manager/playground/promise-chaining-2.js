require('../src/db/mongoose')

const Tasks = require('../src/models/tasks')

Tasks.findByIdAndDelete('5e24a3c33f8c7f7d0835fc7b').then((task) => {
    console.log(task)
    return Tasks.countDocuments({ completed: false })
}).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

const deleteTaskAndCount = async(id) => {
    await Tasks.findByIdAndDelete(id)
    const count = await Tasks.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5e2688d02f1d540183a5361d').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})