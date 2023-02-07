function CheckNumber(n){
    return new Promise((resolve,reject)=>{
if(n>10){
    resolve();
}
else{
    reject()
}

    })
}
CheckNumber(10).then(()=>console.log('graterthan 10')).catch(()=>console.log('less than 10'))