// happy coding

let fibonacci:number[]=[0,1]
function fibonacciList(n:number) {
    for (let i:number=2;i<n;i++){
        fibonacci[i]=fibonacci[i-2]+fibonacci[i-1];
    }
    return fibonacci;
}

console.log(fibonacciList(12))
