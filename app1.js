//variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto) {
    let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor");

    console.log(numeroUsuario);
    /*
    Este codigo realiza 
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste, el Número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    } else {
        if(numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor"); 
        }  else {
        alert("El número secreto es mayor")
        }
        //Incrementamos el contador cuando no acierta.
        //intentos = intentos + 1;
        //intentos += 1;
        intentos ++;
       // palabraVeces = "veces";
        if(intentos > maximosIntentos) {
            alert(`Llegaste al número maximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condicion no se cumplio
        //alert("Lo siento, no acertaste");
    }
}