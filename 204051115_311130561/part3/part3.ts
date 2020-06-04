function* idMaker() {
    let index = 0;
    while (index < 3)
      yield(index++);
  }
  
  const gen = idMaker();
  
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // undefined



export function* braid(generator1: Generator, generator2: Generator){
    for(let n=0;; n++){
        yield generator1.next();
        yield generator2.next();
    }
}

export function* biased(generator1: Generator, generator2: Generator){
    for(let n=0;; n++){
        yield generator1;
        yield generator1;
        yield generator2;
    }
}

/*
function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}



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



.................

for ( let n=0; n<5;n++ ) {
    console.log(foo());
    console.log(foo().next().value);
}



/*
function* take(n, generator) {
    for (let x of generator) {
        if (n <= 0) return;
        n--;
        yield x;
    }
}



function * gen1() {
    yield 3;
    yield 6;
    yield 9;
    yield 12;
    }
    function * gen2() {
    yield 8;
    yield 10;
    }
    for ( let n of take( 4 , braid(gen1,gen2))) {
    console.log(n);
    }
//

/*
// An infinite generator
function* naturalNumbers() {
    for (let n=0;; n++) {
        yield n;
    }
}

for (let n of take(3, naturalNumbers())) {
    console.log(n);
}
*/