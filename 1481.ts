function findLeastNumOfUniqueInts(arr: number[], k: number): number {
    
    const arr2 = arr.filter((value, index, self) => {
        self.indexOf(value) === index;
    })

    let count = 0;

    while (k > count) {
        arr2.pop();
        count++;
    }

    return arr2.length;

};

let arr = [5,5,4];
let k = 1;

console.log(findLeastNumOfUniqueInts(arr, 1));
