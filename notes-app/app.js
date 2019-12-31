const yargs = require('yargs')
const chalk = require('chalk')
const validator = require('validator')
const notes = require('./note.js')

// Add, Remove, Read, List

// Create Add Command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

// Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
})

// Create Read Command
yargs.command({
    command: 'read',
    describe: 'Read note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNotes(argv.title)
    }
})

// Create List Command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: (argv) => {
        notes.listNotes(argv.title)
    }
})

console.log(yargs.argv)