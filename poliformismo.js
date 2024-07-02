class Animal{
    habitat(){
        console.log('habitat')
    }
}
class Jirafa extends Animal{
    habitat(){
        console.log('Sabana africana')
    }
}
class Tortuga extends Animal{
    habitat(){
        console.log('Aguas templadas')
    }
}
class Leon extends Animal{
    habitat(){
        console.log('Sabana africana')
    }
}
class Koala extends Animal{
    habitat(){
        console.log('Bosques australianos')
    }
}
const habitatAnimal = (animal) => {
    animal.habitat()
}

const jirafa = new Jirafa()
const tortuga = new Tortuga()
const leon = new Leon()
const koala = new Koala()

habitatAnimal(jirafa)
habitatAnimal(tortuga)
habitatAnimal(leon)
habitatAnimal(koala)