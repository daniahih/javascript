const p1= new Promise((resolve,reject)=>{
let a =1+1;
if(a==2){
    resolve('success')
}
else{
    reject('faild')
}
    
})
p1.then((msg)=> { console.log('this is '+msg)}).catch((msg)=>{ console.log('this is '+msg)})