const nombres=document.querySelector('.nombre')
const apellido=document.querySelector('.apellido')
const tel=document.querySelector('.tel')
const fecha=document.querySelector('.fecha')
const email=document.querySelector('#email')
const contra=document.querySelector('#contra')
const contraOtra=document.querySelector('#contraOtra')
let bien=0

const registrar=document.getElementsByClassName('registrar')
const nombreValida=/^[a-zA-Z]+\D$/g
const apellidoValida=/^[a-zA-Z]+\D$/g
const fechaValida=/^(0?[1-9]|[1-2][0-9]|3[0-1])\/(0?[1-9]|1[0-2])\/([0-9]{4})$/
const telValida=/[3]\d{9}$/g
const emailValida=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

function nombreVal(){
    bien=0
    if(nombreValida.test(nombres.value)){
        console.log(nombres.value)
        bien+=1
    }
    else{
        alert('Error el nombre no debe contener símbolos ni números')
        nombres.value=''
    }

    if(apellidoValida.test(apellido.value)){
        console.log(apellido.value)
        bien+=1
    }else{
        alert('Error el apellido no debe contener símbolos ni números')
        apellido.value=''
    }

    if(fechaValida.test(fecha.value)){
        console.log(fecha.value)
        bien+=1
    }else{
        alert('Error en la fecha, digítela de nuevo')
        fecha.value=''
    }

    if(telValida.test(tel.value)){
        console.log(tel.value)
        bien+=1
    }else{
        alert('Error, el número debe ser de 10 dígitos y solo contener números')
        tel.value=''
    }

    if(emailValida.test(email.value)){
        console.log(email.value)
        bien+=1
    }else{
        alert('Error en el correo electrónico')
        email.value=''
    }

    if(contra.value==contraOtra.value){
        console.log(contraOtra.value)
        bien+=1
    }else{
        alert('Error, las contraseñas no coinciden')
        contraOtra.value=''
    }

    if(bien==6){
        alert('Usuario Registrado')
        location.href='./index.html'
    }
}

function cancelar(){
    location.href='./index.html'
}