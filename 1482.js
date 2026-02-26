function minDays(bloomDay, m, k) {
    let days = -1;
    const totalFlowers = bloomDay.length;
    const neddedFlowers = k * m;
    if (neddedFlowers > totalFlowers) {
        return days;
    }
    const orderDays = bloomDay.sort((a, b) => a - b);
    let bloomedFlowers = 0;
    while (bloomedFlowers < neddedFlowers) {
        for (let i = 0; i < orderDays.length; i++) {
            if (orderDays[i] > 0) {
                orderDays[i] -= 1;
                if (orderDays[i] === 0) {
                    bloomedFlowers++;
                }
            }
        }
        days++;
    }
    return days;
}
;
//m = ramos
//k = flores para ramo
// n flores
const bloomDay = [1, 10, 3, 10, 2];
const m = 3;
const k = 1;
console.log(minDays(bloomDay, m, k));
