function seq(...funcs) {
  return (arg) => {
    if (typeof arg === 'number') {
      let result = arg;
      for (let fn of funcs) {
        result = fn(result);
      }
      return result;
    }
    return seq(...funcs, arg);
  };
}

console.log('seq(x => x * 2)(x => x + 7)(5) =', 
  seq(x => x * 2)(x => x + 7)(5)); 
