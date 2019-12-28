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
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing note!')
    }
})

// Create Read Command
yargs.command({
    command: 'read',
    describe: 'Read note',
    handler: function() {
        console.log('Reading note!')
    }
})

// Create List Command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function() {
        console.log('Listing note!')
    }
})

console.log(yargs.argv)