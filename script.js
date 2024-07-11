const tarjeta = document.querySelector("#tarjeta");
const boton = document.querySelector(".boton");
const imagen = document.querySelector("img");
const div = document.querySelector(".imgTarjeta");

let numero = [];
let luhn = [];
let acum = 0;

boton.onclick = () => {
  numero = [];
  luhn = [];
  acum = 0;

  for (let index = 0; index < tarjeta.value.length; index++) {
    if (isNaN(parseInt(tarjeta.value[index]))) {
      console.log("No funciona tarjetaa");
      return;
    } else {
      numero.push(tarjeta.value[index]);
    }
  }
  console.log(numero);

  if (numero.length == 16) {
    for (let i = 0; i < numero.length; i++) {
      if (i % 2 == 0) {
        if (numero[i] * 2 >= 10) {
          let resultado = numero[i] * 2;
          console.log(
            parseInt(resultado.toString().charAt(1)) +
              parseInt(resultado.toString().charAt(0))
          );
          // 4137894711755904
          luhn.push(
            parseInt(resultado.toString().charAt(1)) +
              parseInt(resultado.toString().charAt(0))
          );
        } else {
          luhn.push(numero[i] * 2);
        }
      } else {
        luhn.push(numero[i]);
      }
    }

    for (let i = 0; i < luhn.length; i++) {
      acum = acum + parseInt(luhn[i]);
    }
  } else {
    console.log("No funciona tarjeta");
  }
  console.log(acum);
  if (acum.toString().charAt(1) == 0) {
    alert("La tarjeta es valida, puede usarla");
  } else {
    alert("La tarjeta es invalida, no puede usarse");
  }
  console.log(luhn);
  // Nota: Para saber si una tarjeta es Visa o Mastercard saber que las tarjetas Visa empiezan por 4, las tarjetas Mastercard empiezan por 5 y las tarjetas American Express siempre empiezan por 3
};

tarjeta.onkeyup = (e) => {
  console.log(isNaN(parseInt(e.target.value)));
  if (isNaN(parseInt(e.target.value))) {
    document.querySelector('.texto').innerHTML = 'Debe ingresar solo numeros';
    document.querySelector('.texto').style.color = 'red';
    tarjeta.value = "";
  } else {
    console.log(e.target.value.charAt(0));
    document.querySelector('.texto').innerHTML = '';
    if (parseInt(e.target.value.charAt(0)) == 4) {
      document.querySelector(
        ".imgTarjeta"
      ).innerHTML = `<img width='200' src='https://www.visa.com.co/dam/VCOM/regional/lac/SPA/Default/Partner%20With%20Us/Info%20for%20Partners/Info%20for%20Small%20Business/visa-pos-800x400.jpg'>`;
    } else if (parseInt(e.target.value.charAt(0)) == 5) {
      document.querySelector(
        ".imgTarjeta"
      ).innerHTML = `<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7F23KjYm6Tmnn43i08hyCXqGo5-JsoMcNg&s'>`;
    } else if (parseInt(e.target.value.charAt(0)) == 3){
      document.querySelector(
        ".imgTarjeta"
      ).innerHTML = `<img width='200' src='https://webshoptiger.com/wp-content/uploads/2023/09/American-Express-Color.png'>`;
    }
  }
};
