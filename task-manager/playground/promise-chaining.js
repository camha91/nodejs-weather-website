require('../src/db/mongoose')
const User = require('../src/models/users')

User.findByIdAndUpdate('5e2685784ad46a00cafd3584', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5e2687285dcfd90157d72c50', 16).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
    