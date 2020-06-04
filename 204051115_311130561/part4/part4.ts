

function f(x: number): Promise<number>{
  return new Promise<number>( (resolve : any, reject: any) => {
    if( x != 0)
      resolve(1/x);
    else
      reject("x = 0\n");
  })
}

function g (x: number): number{
    return (x * x);
}

function h (x: number): Promise<number> {
    return f(g(x))
}
