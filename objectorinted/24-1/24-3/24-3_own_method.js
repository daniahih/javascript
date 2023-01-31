const arr=[22,4,6,73,9]
Array.prototype.myfilter=function(callback){
    const newArray=[];
    for(i=0;i<this.length;i++){
        if((callback(this[i]))){

            newArray.push(this[i])
        }
    }
    return newArray;
}
 const try1= arr.myfilter(function(e){
     return e %2 ===1;

 })
  const try2=arr.myfilter(function(e){
     return e %2 ===0;
  })
   const try3 =arr.myfilter(function(e){
    return e >10;
   })


   const array1 = [5, 12, 8, 130, 44];
   Array.prototype.myfind =function(callback){
    let value;
for(let i=0;i<array1.length;i++){
    if(callback(this[i], i)){
        value =this[i]
        return value;
    }
} return value;
   }

     const try4 = array1.myfind((element) => {
    return element>10
  });


  const array2=[5,12,4,3,6,7]
  Array.prototype.myreduce=function(callback){
    let result=this[0];
    for(let i=1;i<this.length;i++){
        result = callback(result,this[i])
            
            
        }
        return result;
    }
  

  const try5=array2.myreduce((acc,c) =>{
     return acc+c;
  })


 console.log(try1);
 console.log(try2);
 console.log(try3)
 console.log(try4)
 console.log(try5)

