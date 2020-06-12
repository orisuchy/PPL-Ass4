import { SlowBuffer } from "buffer";
import { pair } from "ramda";


export function f(x: number): Promise<number>{
  return new Promise<number>( (resolve : any, reject: any) => {
    if( x != 0)
      resolve(1/x);
    else
      reject("x = 0\n");
  })
}

export function g (x: number): number{
    return (x * x);
}

export function h (x: number): Promise<number> {
    return f(g(x))
}
let x = 0;
let check = new Promise<number>((resolve : any, reject: any) => {(x===1)? resolve(1):reject(0)})



export const slower = <T,T1,T2>(p1: Promise<T1>, p2: Promise<T2>): Promise<T> =>{
//  const vals = Promise.all(([p1,p2]))
//   return Promise.race([p1,p2]).then((value)=> {
//     if(value = vals[0]){
      
      
//     }
//   });


    await p1;

    // await(p2);
    // if(p1 && p2){
    //   resolve(faster(p1,p2))
    // }
    // else{
    //   reject("one of the promises failed");
    // }
  })
}

/*
const promise1 = new Promise(function(resolve, reject){
  setTimeout(resolve, 500, 'one'); 
})

const promise2 = new Promise(function(resolve, reject){
  setTimeout(resolve, 100, 'two'); 
})

Slower([promise1, promise2]).then(function(value{
  console.log(value);
});  => (0,'ONE')

*/