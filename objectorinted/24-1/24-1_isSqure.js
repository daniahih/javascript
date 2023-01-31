function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    }
Square.prototype.checksqure=function(){
    if(this.a == this.b && this.b == this.c && this.c == this.d){
        return true 
    }
    else{
        return false 
    }
}
    
let square1  = new Square(1,1,1,1);
let square2 =new Square(1,2,3,6);
console.log(square1.checksqure())
console.log(square2.checksqure())