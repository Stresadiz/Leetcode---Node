function lengthOfLongestSubstring(s) {
    let subString = "";
    let topLenght = 0;
    const arr = Array.from(s);
    let i = subString.length;
    arr.forEach(e => {
        if (subString.includes(e)) {
            subString = subString.slice(subString.lastIndexOf(e) + 1, subString.length);
        }
        subString += e;
        i = subString.length;
        topLenght = i > topLenght ? i : topLenght;
    });
    return topLenght;
}
;
const s = "dvdf";
console.log(lengthOfLongestSubstring(s));
