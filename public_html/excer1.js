/**
 * Funcion que imprime una torre ascendente de gatos
 * @returns {undefined}
 */
function printTower() {
    for (let i = 1; i <= 7; ++i) {
        let s = "";
        let c = 0;
    
        while (true) {
            s += "#";
            ++c;
            if (c === i) break;
        }

        console.log(s);
    }
}

/**
 * Funcion que imprime una torre ascendente de gatos
 * @returns {undefined}
 */
function printTowerImproved() {
    for (let i = 1; i <= 7; ++i) {
        console.log("#".repeat(i));
    }
}
// printTower();



/**
 * Del 1 - 100 escribe "fizz" si se divide por 3, "buzz" por 5 y fizz-buzz por ambos
 * @returns {undefined}
 */
function fizzBuzz() {
    for (let x = 1; x <=100; ++x) {
        if (x % 3 === 0 && x % 5 !== 0) console.log("fizz");
        else if (x % 5 === 0 && x % 3 !== 0) console.log("buzz");
        else if (x % 5 === 0 && x % 3 === 0) console.log("fizz-buzz");
        else console.log(x);
    }
}
// fizzBuzz();



/**
 * Funcion que crea un tablero cuadrado SuperBASICO
 * @param {number} tam Extencion del tablero
 * @returns {undefined}
 */
const chessGrid = (tam) => {
    let s = "";
    
    for (let row = 0; row < tam; ++row) {
        for (let col = 0; col < tam; ++col) {
            if (row % 2 === 0) s += (col % 2 === 0) ? " " : "#";
            else s += (col % 2 === 0) ? "#" : " ";
        }
        s += "\n";
    }
    
    console.log(s);
};
// chessGrid(8);



/**
 * Funcion que devuelve el minimo de un areglo de numeros
 * @argument {array} num Arreglo de numeros
 * @type min.num|min.min.min
 */
const min = function(num) {
    let min = num[0];
    
    for (let i in num) {
        min = (num[i] < min) ? num[i] : min;
    }
    
    return min;
};
// console.log(`minium: ${min([4, 6, 9, 1, -7])}`);



/**
 * Evalua si un numero es par o no
 * @param {number} num Numero a verificar su paridad
 * @returns {Boolean} Paridad
 */
const esPar = (num) => {
    num = Math.abs(num);
    if (num === 0) return true;
    else if (num === 1) return false;
    else return esPar(num - 2);
};
// console.log(`-1 es par: ${esPar(-1)}`);



/**
 * Funcion que cuenta las "F" en un string
 * @param {string} s
 * @returns {Number}
 */
function contarFs(s) {
    return countChar(s, "F");
}
// console.log(countChar("FanFarroneaFs", "r"));


/**
 * Cuenta el numero de ocurrencias de un caracter
 * @param {string} s Cadena en la que buscar
 * @param {string} char Caracter a contar
 * @returns {Number} Numero de ocurrencias del caracter
 */
function countChar(s, char) {
    let c = 0;
    for (let x in s) {
        c += (s[x] === char) ? 1 : 0;
    }
    return c;
}