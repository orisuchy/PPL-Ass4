
// const readFilePromise = (filename: string): Promise<string> => {
//     return new Promise<string>( (resolve, reject) => {
//       fs.readFile(filename, (err, res) => {
//         if (err) 
//           reject(err);
//         else
//           resolve(res.toString('utf8'));
//       })
//     })
//   }






function f(x: number): Promise<number>{
    return new Promise<number>( (resolve,reject) => {
        x = 1/x;
}


function g(x: number): number{
    return x*x
}

function h (x: number): number {
    return f(g(x))
}
