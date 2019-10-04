const opts = {base : {
    demand: true,
    alias: 'b'
}, 
limite : {
    alias: 'l',
    default: 10
} };

const argv = require('yargs')
                .command('listar','lista las tablas de multiplicar del parametro base',opts)
                .command('crear','crea un archivo con las tablas de multiplicar del argumento base',opts)
                .help()//I NEED SOMEBODY, NOT JUST ANYBODY
                .argv;

module.exports = {
    argv
}