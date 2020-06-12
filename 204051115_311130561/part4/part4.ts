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


const getTheOtherOne = (x:any,arr:any[2])=>{
  if(arr.indexOf(x)===0){
    return 1;
  }
  else
    return 0;
}

export const slower = <T,T1,T2>(p1: Promise<any>, p2: Promise<any>):[number, string] =>{

  const pArr = [p1,p2];
  
  //const vals = Promise.all(([p1,p2]))
    Promise.race([p1,p2]).then((value)=> {
        Promise.all(([p1,p2])).then((valsArr)=>{
          pArr[getTheOtherOne(value,valsArr)].then((val)=> {
            console.log([getTheOtherOne(value,valsArr),val]+"\n" + "val type -"+typeof(val))
            return [getTheOtherOne(value,valsArr),val]}).catch((v)=>{return [0, v]})
          
        }).catch((v)=>{return [0, v]})  
    }).catch((v)=>{return [0, v]})  
  
  return [0, "failed"]
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