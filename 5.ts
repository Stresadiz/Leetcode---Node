function longestPalindrome(s: string): string {
    const arr = s;

    let longest : number = 0;
    let sub : string = "";

    //Caso de un unico caracter
    if (arr.length <= 1) {
        return arr[0];
    }

    for (let i = 0; i < arr.length; i++) {
        let start = i;
        let end = arr.length - 1;

        let pointer = end - start;

        while (pointer >= start) {
            
            longest = pointer + 1;

            if (arr[end] === arr[start]) {
                end--;
                start++;
            }
            
            if (pointer === start) {
                sub = arr.slice(start, longest)
            }

            pointer--;
        }
    }

    return sub;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));