function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const m = nums1.length;
    const n = nums2.length;

    if (m > n) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let start = 0;
    let end = m;

    while (start <= end) {
        let partitionA = Math.floor((start + end)/2);
        let partitionB = Math.floor((m + n + 1) / 2) - partitionA;

        let maxLeftA = partitionA > 0 ? nums1[partitionA-1] : -Infinity;
        let maxLeftB = partitionB > 0 ? nums2[partitionB-1] : -Infinity;

        let minRightA = partitionA < m ? nums1[partitionA] : Infinity;
        let minRightB = partitionB < n ? nums2[partitionB] : Infinity;

        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
            let maxLeft = Math.max(maxLeftA, maxLeftB);
            let minRight = Math.min(minRightA, minRightB);

            if ((m+n)%2 === 0) {
                return ((maxLeft + minRight) / 2);
            } 

            return maxLeft;

        } else if (maxLeftA > minRightB) {
            end = partitionA - 1;
        } else if (maxLeftB > minRightA) {
            start = partitionA + 1;
        }
    }
};

const arr1 = [1,3];
const arr2 = [2];
const arr3 = [1,2];
const arr4 = [3,4];

console.log(findMedianSortedArrays(arr1, arr2));
console.log(findMedianSortedArrays(arr3, arr4));
