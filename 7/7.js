function reverse(x) {
    let result = parseInt(Array.from(String(x), Number).reverse().join(""));
    result = x < 0 ? result * -1 : result;
    return (result > -(Math.pow(2, 31)) && result < (Math.pow(2, 31)) - 1) ? result : 0;
}
;
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
