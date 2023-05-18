export const getRandonNumber = (min, max) => {
    //Obtenemos la distancia entre los dos numeros
    const amplitud = Math.abs(max - min);

    // Gneramos un numero alaeatorio entre 0 y esa distancia
    const randomAmplitud = Math.round(Math.random() * amplitud);

    // Y con esa distancia aleatoria se suma al minimo
    // Donde en el caso extremo de 0, nos quedamos en la distancia minima
    // Y en el caso extremo donde se obtiene la distancia completa, nos quedamos con el maximo.
    return min + randomAmplitud;
};