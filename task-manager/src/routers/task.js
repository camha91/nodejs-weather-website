const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const Tasks = require('../models/tasks')

router.post('/tasks', auth, async (req, res) => {
    const task = new Tasks({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
    
})

router.get('/tasks', auth, async (req, res) => {
    try {
		// const tasks = await Tasks.find({ owner: req.user._id})
		await req.user.populate('tasks').execPopulate()
        res.send(req.user.tasks)
    } catch (e) {
        res.status(500).send()
    }

})

router.get('/tasks/:id', auth, async (req, res) => {
    try {
        const task = await Tasks.findOne({_id: req.params.id, owner: req.user._id })
		
        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
    
})

router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperations = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperations) {
        return res.status(404).send({'Error': 'Invalid updates!'})
    }

    try {
		const task = await Tasks.findOne({ _id: req.params.id, owner: req.user._id })
		
        if (!task) {
            return res.status(404).send()
        }
		
		updates.forEach((update) => task[update] = req.body[update])
		
		await task.save()
		
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const task = await Tasks.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router