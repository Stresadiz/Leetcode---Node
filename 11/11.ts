function maxArea(height: number[]): number {
    
    if (height.length <= 2) {
         return height.reduce((count, value) => count * value, 1)
    }

    let maxim = 0;
    let indexMax = 0;

    let yArea = 0;
    let xArea = 0;

    let maxAreaValue = 0;

    for (let i = 0; i < height.length; i++) {
        if (height[i] > maxim){
            maxim = height[i];
            indexMax = i;
        }
    }

    for (let i = 0; i < height.length; i++) {
        if (i === indexMax) continue;

        let val = height[i];
        let indexVal = i;

        let maxHeightArea = Math.max(val, maxim) - Math.abs(val-maxim);

        if (maxHeightArea > yArea) {
            yArea = maxHeightArea;

            xArea = Math.abs(indexMax - indexVal);
            
            maxAreaValue = maxAreaValue > yArea * xArea ? maxAreaValue : yArea * xArea;
        }
    }

    return maxAreaValue;
};

//let arr = [1, 1]
//console.log(maxArea(arr));

let arr2 = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(arr2));

