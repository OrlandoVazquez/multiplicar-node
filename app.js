const argv = require('./config/yarg').argv;
const colors = require('colors');


const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
            console.log('Listar'); 
            listarTabla(argv.base, argv.limite).then( resp => {}  ).catch(err => console.log(err));
    break;
    case 'crear':
            console.log('Crear'); 
            crearArchivo(argv.base, argv.limite).then( archivo => console.log(`Archivo creado :${colors.green(archivo)}`)).catch(error=>console.log(error));
    break;
    default: 
        console.log(`los dioses no necesitamos ${comando}`);
}

//  console.log(argv);
