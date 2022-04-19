console.clear();

//****************************EJERCICIO************************ */
// Dada la siguiente matriz, calcule la suma de su diagonales
// y luego retorne el valor absoluto de la diferencia de diagonales
//****************************EJERCICIO************************ */

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
];

//************************************************************ */
//IMPLEMENTACIÓN DEFINITIVA****************************************
//************************************************************ */
function diagonalDifference(arr) {
  let sum_diag1 = 0;
  let sum_diag2 = 0;
  let cont = 1;
  for (let i = 0; i < arr.length; i++) {
    sum_diag1 = sum_diag1 + arr[i][i];
    sum_diag2 = sum_diag2 + arr[i][arr.length - cont];
    cont = cont + 1;
  }
  const dif_diag = sum_diag1 - sum_diag2;
  return Math.abs(dif_diag);
}

console.log("Valor absoluto diferencia diagonales:");
console.log(diagonalDifference(arr));
//************************************************************ */
//IMPLEMENTACIÓN DEFINITIVA****************************************
//************************************************************ */

// console.log(arr.length);

//0,0 ; 1,1 ; 2,2
//0,-1 ; 1,-2 ; 2,-3

//************************************************************ */
//PRIMERA IMPLEMENTACIÓN****************************************
//************************************************************ */

// let sum_diag1 = 0;
// let sum_diag2 = 0;

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i][i]);
//   sum_diag1 = sum_diag1 + arr[i][i];
// }

// console.log("diag1", sum_diag1);

// let cont = 1;
// for (let j = 0; j < arr.length; j++) {
//   console.log(arr[j][arr.length - cont]);
//   sum_diag2 = sum_diag2 + arr[j][arr.length - cont];
//   cont = cont + 1;
// }

// console.log("diag2", sum_diag2);

//************************************************************ */
//PRIMERA IMPLEMENTACIÓN****************************************
//************************************************************ */
