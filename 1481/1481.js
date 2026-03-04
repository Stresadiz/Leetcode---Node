function findLeastNumOfUniqueInts(arr, k) {
    let duplicateArr = new Map();
    for (const num of arr) {
        duplicateArr.set(num, (duplicateArr.get(num) || 0) + 1);
    }
    let frequencys = Array.from(duplicateArr.values()).sort((a, b) => a - b);
    let uniques = frequencys.length;
    for (const element of frequencys) {
        if (k >= element) {
            k -= element;
            uniques--;
        }
        else {
            break;
        }
    }
    return uniques;
}
;
let arrTest = [4, 3, 1, 1, 3, 3, 2];
let kNumb = 3;
console.log(findLeastNumOfUniqueInts(arrTest, kNumb));
