const { crearArchivo, crearArchivo2 } = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();
//console.log(process.argv);
//console.log(argv);

crearArchivo(argv.base, argv.listar)
    .then(nombreArchivo => console.log('Archivo', nombreArchivo, 'creado!'))
    .catch(err => console.log(err));

/* crearArchivo2(base * 2)
    .then(nombreArchivo => console.log('Archivo', nombreArchivo, 'creado!'))
    .catch(err => console.log(err)); */