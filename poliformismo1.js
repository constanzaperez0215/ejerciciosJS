// Clase base Animal que define un método hacerSonido.
class Animal {
    // Método hacerSonido que imprime un sonido genérico de animal.
    hacerSonido() {
      console.log('Sonido de animal');
    }
  }
  // Subclase Perro que hereda de la clase base Animal.
  class Perro extends Animal {
    // Implementación del método hacerSonido específica para perros.
    hacerSonido() {
      console.log('Guau guau');
    }
  }
  // Subclase Gato que hereda de la clase base Animal.
  class Gato extends Animal {
    // Implementación del método hacerSonido específica para gatos.
    hacerSonido() {
      console.log('Miau miau');
    }
  }
  class Gallina extends Animal{
      hacerSonido(){
          console.log('cluck cluck')
      }
  }
  // Función que acepta un objeto de tipo Animal y llama a su método hacerSonido.
  function hacerSonidoAnimal(animal) {
    // Llamada al método hacerSonido del objeto pasado como argumento.
    animal.hacerSonido();
  }
  let gallina =  new Gallina()
  hacerSonidoAnimal
  // Creación de una instancia de Perro.
  let perro = new Perro();
  // Creación de una instancia de Gato.
  let gato = new Gato();
  // Llamada a la función hacerSonidoAnimal con un objeto Perro.
  hacerSonidoAnimal(perro); // Guau guau
  // Llamada a la función hacerSonidoAnimal con un objeto Gato.
  hacerSonidoAnimal(gato); // Miau miau
  // Clase base Pago que define un método procesar que debe ser implementado por las subclases.



  //-------------------------------------------------------------------------------------------------------------------------

  class Pago {
    procesar() {
      // Lanzamos un error si este método no es implementado en las subclases.
      throw new Error("Este método debe ser implementado");
    }
  }
  // Subclase PagoTarjetaCredito que hereda de la clase base Pago.
  class PagoTarjetaCredito extends Pago {
    // Implementación del método procesar para pagos con tarjeta de crédito.
    procesar() {
      console.log('Procesando pago con tarjeta de crédito');
    }
  }
  // Subclase PagoPayPal que hereda de la clase base Pago.
  class PagoPayPal extends Pago {
    // Implementación del método procesar para pagos con PayPal.
    procesar() {
      console.log('Procesando pago con PayPal');
    }
  }
  // Función que acepta un objeto de tipo Pago y llama a su método procesar.
  function procesarPago(pago) {
    // Llamada al método procesar del objeto pasado como argumento.
    pago.procesar();
  }
  // Creación de una instancia de PagoTarjetaCredito.
  let pagoTarjeta = new PagoTarjetaCredito();
  // Creación de una instancia de PagoPayPal.
  let pagoPayPal = new PagoPayPal();
  // Procesar el pago con tarjeta de crédito.
  procesarPago(pagoTarjeta); // Procesando pago con tarjeta de crédito
  // Procesar el pago con PayPal.
  procesarPago(pagoPayPal); // Procesando pago con PayPal

  class CuentaBancaria {
      #saldo = 0; // Propiedad privada
      constructor(nombre,rut) {
        this.nombre = nombre;
        this.#rut = rut
      }

      depositar(cantidad) {
        this.#saldo += cantidad;
      }
      obtenerSaldo() {
        return this.#saldo;
      }
    }
    let cuenta = new CuentaBancaria('Juan');
    cuenta.depositar(100);
    console.log(cuenta.obtenerSaldo()); // 100
    console.log(cuenta.#saldo); // Error: propiedad privada