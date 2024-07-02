class zoologico{
    constructor(animal, edad, peso, ubicacion) {
        this.animal = animal
        this.edad = edad
        this.peso = peso
        this.ubicacion = ubicacion
    }
}

const zoologico1 = new zoologico ('Elefante', 15, 5200, 'África')
const zoologico2 = new zoologico ('Jirafa', 7, 1500, 'África')
const zoologico3 = new zoologico ('Tigre de bengala', 3, 180, 'India')
const zoologico4 = new zoologico ('Zorro Artico', 5, 8, 'Círculo polar Ártico')

console.log(zoologico4)