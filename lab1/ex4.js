const arr = [ 5 , -12 , false , 'привіт' , 150 , 'mlp' , true , 500 , false , false , 'word' , [1,2,3,] , Infinity , Symbol('test'),  undefined , {key: 'value'},  function () {}] ;

    const typeCount = {};

for (const item of arr) {
  const type = typeof item;
  
  if (typeCount[type] === undefined) {
    typeCount[type] = 0;
  }
  
  typeCount[type]++;
}

console.dir(typeCount);
