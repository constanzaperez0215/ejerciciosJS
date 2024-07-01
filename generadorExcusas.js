const personajes = ['El perro', 'Mi hermana','El alien','Un mono', 'El oso']
const acciones = ['se cayó en', 'pateó','pisó', 'botó']
const objetos = ['el piso', 'la tarea', 'el abismo', 'la pelota']

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const generador = () => {
    const personaje = personajes[getRandomInt(personajes.length)]
    const accion = acciones[getRandomInt(acciones.length)]
    const objeto = objetos[getRandomInt(objetos.length)]

    const excusa = `${personaje} ${accion} ${objeto}`
    return excusa
}

console.log(generador())