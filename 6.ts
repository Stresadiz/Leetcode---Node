function convert(s: string, numRows: number): string {
    
	if (numRows === 1 || s.length <= numRows) return s;
	
    const len : number = s.length;
    let value : number = 0;
    let str  :string = "";
    let pointer: number = numRows - 1;
    let matriz: string[][] = [];


    while (value < len) {
        let arr : string [] = [];
        for (let i = 0; i < numRows; i++) {
            let aux: string = s[value];
            if (value < s.length) {
                if ((pointer === 0 || pointer === numRows - 1 || (pointer === numRows - i - 1))) {
                    arr.push(aux);
                    value++;
                } else {
                    arr.push("");
                }
            } else {
                arr.push("");
            }
            
        }

        pointer++;
        
        if ((pointer)%numRows == 0) {
            pointer = 1;
        }

        matriz.push(arr);
    };

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < matriz.length; j++) {
            let value = matriz[j][i];
            if (value !== "") {
                str += value;
            }
        }
        
    }
    return str;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));