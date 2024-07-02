// SISTEMA DE NOTIFICACIONES
// Crea una clase base Notificacion con un método enviar.
// Crea dos clases derivadas: Email y SMS, que implementen el método enviar de manera diferente.
// Implementa una función que reciba un objeto de tipo Notificacion y llame a su método enviar.

class Notificacion{
    enviar(){
        console.log('envia la notificacción')
    }
}

class Email extends Notificacion{
    enviar(){
        console.log('Has enviado un email')
    }
}

class SMS extends Notificacion{
    enviar(){
        console.log('Has enviado un SMS')
    }
}

const enviarNotificacion = (notificacción) => {
    notificacción.enviar()
}

const email = new Email()
const sms = new SMS()

enviarNotificacion(email)
enviarNotificacion(sms)