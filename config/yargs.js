const descripcion =  {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado =  {
    default: true,
    alias: 'c',
    desc: 'Marca como compleatado o pendiente una tarea'
}

const argv =  require('yargs')
    .command('crear','Crear una actividad por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado compleatado de una tarea', {
        descripcion,
        completado
    })
    .command('borrado', 'Borra una tarea en especifico', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}