

function* take(n: number, generator: Generator<any, void, unknown>) {  // copy paste from lecture
    for (let x of generator) {
        if (n <= 0) return;
        n--;
        yield x;
    }
}


function* braid(generator1: { (): Generator<3 | 6 | 9 | 12, void, unknown>; next?: any; }, generator2: { (): Generator<8 | 10, void, unknown>; next?: any; }){
    for(let n=0;; n++){
        yield generator1.next();
        yield generator2.next();
    }
}

function * biased(generator1: { next: () => any; }, generator2: { next: () => any; }){
    for(let n=0;; n++){         // should we return "undefiened" after the end of the generator? or do
        yield generator1.next();// while(! (generator1.done && generator2.done) )
        yield generator1.next();
        yield generator2.next();
    }
}

function* gen1() {
    yield 3;
    yield 6;
    yield 9;
    yield 12;
    }
function* gen2() {
yield 8;
yield 10;
}
for ( let n of take( 4 , braid(gen1,gen2))) {
console.log(n);
}








/*
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

  
/*
function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

for ( let n=0; n<5;n++ ) {
    console.log(foo());
    console.log(foo().next().value);
}
/*


console.log("works:\n");
function* naturalNumbers() {
    for (let n=0;; n++) {
        yield n;
    }
}
for (let n of take(3, naturalNumbers())) {
    console.log(n);
}
/*


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