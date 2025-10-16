const arr = [ 5 , -12 , false , 'привіт' , 150 , 'mlp' , true , 500 , false , false , 'word' , [1,2,3,] ,  undefined , {key: 'value'},  function () {}] ;

    const typeCount = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0, 
  undefined: 0,
  function: 0,
  symbol: 0,
  bigint: 0
    };

    for (const item of arr) {
  const type = typeof item;
  typeCount[type]++;
}


console.dir(typeCount);
