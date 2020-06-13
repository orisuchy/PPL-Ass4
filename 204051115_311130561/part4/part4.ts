import { SlowBuffer } from "buffer";
import { pair } from "ramda";
import { error } from "console";


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


const getTheOtherOne = (x:any,arr:any[2])=>{
  if(arr.indexOf(x)===0){
    return 1;
  }
  else
    return 0;
}

export const slower = (p1: Promise<any>, p2: Promise<any>):Promise<[number, string]> =>{
  const pArr = [p1,p2];
  return new Promise<[number, string]>( (resolve,reject) => {
    Promise.race([p1,p2]).then((value)=> {
      Promise.all(([p1,p2])).then((valsArr)=>{
        pArr[getTheOtherOne(value,valsArr)].then((val)=> {
          resolve ([getTheOtherOne(value,valsArr),val])}).catch((v)=>{reject(new Error("error"))})
      }).catch((v)=>{reject(new Error("error"))})  
    }).catch((v)=>{reject(new Error("error"))}) 
  })
}
