function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var result = 1
  var newAngka = String(angka)
  var tampung = 1
  // console.log(newAngka)

  if(newAngka.length <= 1){
    return Number(newAngka)
  }
  else {
    for(var i=0;i<newAngka.length;i++){
      
      tampung *= Number(newAngka[i])
    }
  }
  return kaliTerusRekursif(tampung)
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6