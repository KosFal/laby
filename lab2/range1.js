function range(start, end) {
  const arr = [];
  
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  
  return arr;
}

const res = range(15, 30);
console.log(res); 
