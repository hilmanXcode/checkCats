const checkCats = (CatsTuti, CatsNining) => {
  delete CatsTuti[0];
  delete CatsTuti[CatsTuti.length-1];
  delete CatsTuti[CatsTuti.length-2];
  let finalArr = CatsTuti.concat(CatsNining);

  finalArr = finalArr.filter(data => {
    if(Object(data).length !== 0)
    {
      return true
    }

    return false

  });

  for(let i = 0; i < finalArr.length; i++) console.log(`Kucing Nomor ${i+1} adalah Kucing ${ (finalArr[i] >= 3) ? 'Dewasa' : 'Kecil' }, dan berusia ${finalArr[i]} tahun`)
}

console.log('Data Uji 1: ')
checkCats([3,5,2,12,7], [4,1,15,8,3]);
console.log('Data Uji 2: ')
checkCats([9,16,6,8,3], [10,5,6,1,4]);
