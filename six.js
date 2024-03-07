

//increment or decrement 

let a = 3 
a++
console.log(a) //4

let b = 6 
b--;
console.log(b) //5

//pre-incremnt - pahle hi ho jayega increment 
//post-increment = baad me hoga increment 

console.log("***********************************")
let x = 3 ;
console.log(x++) //3
console.log(x)  //4

let y =9;
console.log(++y) //10
console.log(y)  //10

let v = 8;
let u =7;

console.log((u++) + (v++) + (++u) + (u*v))
console.log((--v) + (u--) + (u*v) + (v++) + (++u)) //78 98
            // 7    +  7  +  6*7 +  7 + 7
            // 28+ 42
            // 70
            //  8    +  9    +  8*8  + 8  + 9
                // 17 + 64 + 17
                // 98
            //  7    +  8    +  9   +  9*9
            //     15 + 9 +81
                // 105
//79
//81


console.log("***********************************")

let vb = 4;

let gh = vb> 20 ? "You can drive " : "You can't drive ";

console.log(gh)