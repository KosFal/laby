function sum(...args) {
  let result = 0;
  if (args.length === 0) return result;
  
  let i = 0;
  do {
    result += args[i];
    i++;
  } while (i < args.length);
  
  return result;
}

console.log(sum(1,2,3));
