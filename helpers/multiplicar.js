const fs = require('fs');

const crearArchivo = (base = 5, listar) => {
    return new Promise((resolve, reject) => {
        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        if (listar)
            console.log(salida);

        fs.writeFile(`./salidas/tabla-${base}.txt`, salida, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`)
        });
    });

    //fs.writeFileSync(`tabla-${base}.txt`, salida);
    //Igual, pero para ver el error hay que usar un try-catch
}


const crearArchivo2 = async(base = 5) => {
    try {
        let salida = '';
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo,
    crearArchivo2
}