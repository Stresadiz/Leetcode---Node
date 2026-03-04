function convert(s: string, numRows: number): string {

if (numRows === 1 || s.length < numRows) return s;

let flag : boolean = false;
let count : number = 0;

let arr : string[] = new Array(numRows).fill("");

    for (let i = 0; i < s.length; i++) {
        let value = s[i];

        arr[count] += value;

        if (count === 0 || count >= numRows -1) flag = !flag;

        flag ? count++ : count--;
    }

    return arr.join("");
}

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
