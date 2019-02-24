function changeVocals(str) {
  //code di sini
  var vocal = "aiueo"
  var abjad = "abcdefghijklmnopqrstuvwxyz"
  result = ""
  
  // for(var j=0;j<vocal.length;j++){

    for(var i=0;i<str.length;i++){
      // console.log(vocal[0], str[i])

      if(vocal[0] === str[i]){
        result += 'b'
        // console.log(result)
      }
      else if(vocal[1] === str[i]){
        result += "j"
      }
      else if(vocal[2] === str[i]){
        result += 'v'
      }
      else if(vocal[3] === str[i]){
        result += 'f'
      }
      else if(vocal[4] === str[i]){
        result += 'p'
      }
      else if(str[i] !== vocal){
        result += str[i]
      }
    } 
   
  return result
}

function reverseWord(str) {
  //code di sini
  var hasilVocals = changeVocals(str)
  var result = ""
  // console.log(changeVocals(str))
  for(var i=hasilVocals.length-1;i>=0;i--){
    result += hasilVocals[i]    
  }
  return result
}

function setLowerUpperCase (str) {
  //code di sini
  // console.log(reverseWord(str))
  var hasilReverse = reverseWord(str)
  result = ""
  var lower = ""
  var upper = ""

  for(var i=0;i<hasilReverse.length;i++){
    if(hasilReverse[i] === hasilReverse[i].toLowerCase()){
      result += hasilReverse[i].toUpperCase()
    } else {
      result += hasilReverse[i].toLowerCase()
    }  
  } 
  return result
}

function removeSpaces (str) {
  //code di sini
  var hasilLowerUpper = setLowerUpperCase(str)
  result = ""
  // console.log(hasilLowerUpper)

  for(var i=0;i<hasilLowerUpper.length;i++){
    if(hasilLowerUpper[i] === " "){
    } else {
      result += hasilLowerUpper[i]
    }
    
  }
  return result
}

function passwordGenerator (name) {
  //code di sini
  var password = removeSpaces(name)

  for(var i=0;i<password.length;i++){
    if(password.length <= 5){
      return "Minimal karakter yang diinputkan adalah 5"
    } else {
      return password
    }
  }

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// str = changeVocals('Sergei Dragunov')
// console.log(reverseWord(str))
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'