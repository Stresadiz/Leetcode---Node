function isPalindrome(x) {
    if (x < 0)
        return false;
    if (x > 0 && x < 10)
        return true;
    let n = Math.abs(x);
    let rev = 0;
    while (n != 0) {
        let digit = n % 10;
        rev = rev * 10 + digit;
        n = ~~(n / 10);
    }
    if (rev < (Math.pow(2, 31)) * -1 || rev > (Math.pow(2, 31)) - 1)
        return false;
    return rev === x ? true : false;
}
;
console.log(isPalindrome(121));
