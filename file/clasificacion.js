//function prediccion() {
//constante que invoca la libreria mobilenet
const mobilenet = require('@tensorflow-models/mobilenet');
//constante que invoca la libreria tfjs-node
const tfnode = require('@tensorflow/tfjs-node');
const fs = require('fs');

const leerImagen = ruta => {

    const bufferimage = fs.readFileSync(ruta);
    const imagentf = tfnode.node.decodeImage(bufferimage);
    return imagentf;
}

const clasificacionImagen = async ruta => {
    const image = leerImagen(ruta);
    const modeloMobile = await mobilenet.load();
    const prediccion = await modeloMobile.classify(image);
    console.log('resultado de la clasificacion', prediccion);

}


if (process.argv.length !== 3) throw new Error('esto es un argumento invalido');
clasificacionImagen(process.argv[2]);
//}
// ejercicio con lo que hemos visto , crear una pantalla fron end , se va a conectar por node , pedir al usuario que carge la imagen  y cuando se le de al boton precedir 
// un boton de proceso va a mostrar las posible predicciones que alla optenido de la libreria
//otro boton que habilita la camara tomar una foto y la foto sera la que va a predecir 

// Van a crear una pantalla front end, html , la cual se va a conectar por node js , van a crear una pantallla , va a crear la imagen, cuando se le de al botón predecir, 
// En la parte inferior va a mostrar las posibles predicciones que halla obtenido del resultado de la librería.
// Va a existir otro botón que habilita la cámara, va permitir tomar la fotografía  y dicha fotografía será que la predecirá
//paso 2
// investigiar que otra libreria de tensor flow de detencion de objetos o de personas y deben realizar un ejercicio en node js con esa libreria