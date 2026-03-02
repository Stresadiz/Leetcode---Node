function reverse(x: number): number {

    if (x < 10 && x > -10) {
        return x;
    }

    let result : number = parseInt(Array.from(String(x), Number).reverse().join(""));
    
    result = x < 0 ? parseInt(`-${result.toString()}`) : result;

    return (result > -(2 ** 31) && result < (2 ** 31) - 1 ) ? result : 0;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));

