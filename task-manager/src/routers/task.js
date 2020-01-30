const express = require('express')
const router = new express.Router()
const Tasks = require('../models/tasks')

router.post('/tasks', async (req, res) => {
    const task = new Tasks(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
    
})

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Tasks.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send()
    }

})

router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Tasks.findById(req.params.id)
        
        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
    
})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperations = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperations) {
        return res.status(404).send({'Error': 'Invalid updates!'})
    }

    try {
		const task = await Tasks.findById(req.params.id)
		updates.forEach((update) => task[update] = req.body[update])
		
		await task.save()
		
        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Tasks.findByIdAndDelete(req.params.id)

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router