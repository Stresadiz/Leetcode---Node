function longestPalindrome(s) {
    let longestSub = "";
    // Caso base
    if (s.length <= 1)
        return s;
    //Recorremos desde izquierda hacia derecha
    for (let i = 0; i < s.length; i++) {
        //recorremos desde derecha a izquierda
        for (let j = s.length - 1; j >= i; j--) {
            if (j - i + 1 <= longestSub.length)
                break;
            if (isPalindrome(s, i, j)) {
                longestSub = s.substring(i, j + 1);
            }
        }
    }
    return longestSub;
}
function isPalindrome(str, left, right) {
    while (left < right) {
        if (str[left] !== str[right])
            return false;
        left++;
        right--;
    }
    return true;
}
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
