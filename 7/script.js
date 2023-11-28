// Definir una función llamada convertTemperature
function convertTemperature() {
    // Obtiene el valor en grados Celsius desde el input con el id celsius
    const celsius = parseFloat(document.getElementById("celsius").value);
  
    //Formula para convertir
    const fahrenheit = (celsius * 9/5) + 32;
  
    // Mostrar el resultado en el elemento con el id "result"
    // Utilizamos innerHTML para cambiar el contenido HTML del elemento
    document.getElementById("result").innerHTML = celsius + " grados Celsius son equivalentes a " + fahrenheit.toFixed(2) + " grados Fahrenheit.";
  }
  