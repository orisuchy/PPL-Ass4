
// given 2 generators, interleave their values. if 1 of them is out of values, take from the other one
// finish when they are both out of values
export function* braid(generator1: Generator, generator2: Generator){
    const gen1Op = generator1;
    const gen2Op = generator2;
    for(let n=0;; n++){
        let x = gen1Op.next()
        let y = gen2Op.next()
        if(! (x.value === undefined) )
            yield x.value
        if(! (y.value === undefined) )
            yield y.value
        if ((x.value === undefined)&&(y.value === undefined))
            return x.value
    }
}


export function* biased(generator1: Generator, generator2: Generator){
    const gen1Op = generator1;
    const gen2Op = generator2;
    for(let n=0;; n++){
        let x = gen1Op.next()
        let y = gen2Op.next()
        if(! (x.value === undefined) )
            yield x.value;
        x = gen1Op.next()
        if(! (x.value === undefined) )
            yield x.value;
        if(! (y.value === undefined) )
            yield y.value;
        if ((x.value === undefined) && (y.value === undefined))
            return x.value
    }
}
