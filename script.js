const tarjeta = document.querySelector("#tarjeta");
const boton = document.querySelector(".boton");
const imagen = document.querySelector("img");

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
