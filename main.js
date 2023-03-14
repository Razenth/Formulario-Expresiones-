const nombres=document.querySelector('.nombre')
const apellido=document.querySelector('.apellido')
const tel=document.querySelector('.tel')
const fecha=document.querySelector('.fecha')

const registrar=document.getElementsByClassName('registrar')
const nombreValida=/^[a-zA-Z]+\D$/g
const apellidoValida=/^[a-zA-Z]+\D$/g
const fechaValida=/^(0?[1-9]|[1-2][0-9]|3[0-1])\/(0?[1-9]|1[0-2])\/([0-9]{4})$/
const telValida=/[3]\d{9}$/g

function nombreVal(){
    if(nombreValida.test(nombres.value)){
        console.log(nombres.value)
    }
    else{
        alert('Error el nombre no debe contener símbolos ni números')
        nombres.value=''
    }

    if(apellidoValida.test(apellido.value)){
        console.log(apellido.value)
    }else{
        alert('Error el apellido no debe contener símbolos ni números')
    }

    if(fechaValida.test(fecha.value)){
        console.log(fecha.value)
    }else{
        alert('Mal')
    }

    if(telValida.test(tel.value)){
        console.log(tel.value)
    }else{
        alert('Error, el número debe ser de 10 dígitos y solo contener números')
    }
}