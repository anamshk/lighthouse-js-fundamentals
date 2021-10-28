const args = (process.argv.slice(2));
let result = parseInt(args[0]) + parseInt(args[1]);
console.log(result);
return result;
