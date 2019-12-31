const fs = require('fs')
const chalk = require('chalk')

// Add A Note
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note added'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

// Save All Notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// Load All Notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        return data
    } catch (e) {
        return []
    }
}

// Remove A Note
const removeNote = (title) => {
    const notes = loadNotes()
    const noteToKeep = notes.filter(note => note.title !== title)

    if (noteToKeep.length < notes.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(noteToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

// Read A Note
const readNotes = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find(note => note.title === title)
    
    if (noteToRead) {
        console.log(chalk.inverse(noteToRead.title))
        console.log(noteToRead.body)
    } else {
        console.log(chalk.red.inverse("No note found!"))
    }
}


// List All Notes
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your Notes"))
    notes.forEach(note => {
        console.log(note.title)
    });
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNotes: readNotes,
    listNotes: listNotes
}