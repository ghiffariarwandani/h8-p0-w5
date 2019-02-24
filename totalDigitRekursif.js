function totalDigitRekursif(angka) {
  // you can only write your code here!
  var result = 0
  var newAngka = String(angka)
  // console.log(typeof newAngka)
  if(newAngka.length === 0){
    return 0
  }
  else {
    var sisa = newAngka.slice(1)
    result += Number(newAngka[0])
    return result + totalDigitRekursif(sisa)
  } 
  // console.log(result)
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5