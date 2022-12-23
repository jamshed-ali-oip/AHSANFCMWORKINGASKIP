  const a=[1,8,-1,6,7,-1,5,6]
  let b=[]
  for (let index = 0; index < a.length; index++) {
    let element1 = a[index];
    let element2 = a[index+1];
    if(element1 < element2){
      b.push(element1)
    }
    
  }