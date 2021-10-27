function dice (roll) {
  let num = []
  for (var i = 1; i <= roll ; i++) {
    var result = Math.ceil(Math.random() * 6)
    num.push(result)
    
  }
  return `Rolled ${roll} dice: ${num.join(', ')}`
}
 

console.log(dice(5));