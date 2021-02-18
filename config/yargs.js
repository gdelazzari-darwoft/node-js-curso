const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicacion.'
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            console.log('La base debe ser un numero!')
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Se lista los resultados.'
    })
    .argv;

module.exports = argv;