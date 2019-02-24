function meleeRangedGrouping (str) {
  //your code here
  var result = []
  var ranged = []
  var melee = []
  var output = []
  var newStr = str.split(",") 

  for(var i=0;i<newStr.length;i++){
    result.push(newStr[i].split("-"))
  }

  for(var i=0;i<result.length;i++){
      if(result[i][1] === "Ranged"){
        ranged.push(result[i][0])
      } if(result[i][1] === "Melee") {
        melee.push(result[i][0])
      } 
    }

    output.push(ranged, melee)
    if(ranged.length === 0 && melee.length === 0){
        return []
    }
  
  return output
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []