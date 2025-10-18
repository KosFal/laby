function fn() {
    const objConst = { name: 'Vanya' };
    let   objLet = { name: 'Vasya' };

    objConst.name = 'Ivan'; 
    objLet.name = 'Vasyl'; 

    
    // 'objConst' не може приймати інше значення 
    objLet = { name: 'Anton' };
    console.log("objConst-", objConst);
    console.log("objLet-", objLet)
}

fn();
