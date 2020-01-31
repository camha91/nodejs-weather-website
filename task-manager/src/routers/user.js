const express = require('express')
const router = new express.Router()
const User = require('../models/users')


router.post('/users', async (req, res) => {
   const user = new User(req.body)

   try {
        await user.save()
        res.status(201).send(user)
   } catch (e) {
        res.status(400).send(e)
   }
   
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.send(user)
    } catch (e) {
        res.status(400).send()
    }
})

router.get('/users', async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
    
})

router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
    
})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdate = ['name', 'age', 'email', 'password']
    const isValidOperations = updates.every((update) => allowedUpdate.includes(update))

    if (!isValidOperations) {
        return res.status(400).send({'error': 'Invalid updates!'})
    }

    try {
		const user = await User.findById(req.params.id)
		updates.forEach((update) => user[update] = req.body[update])
		
		await user.save()
        
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
