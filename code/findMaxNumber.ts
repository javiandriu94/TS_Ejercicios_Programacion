const findMaxNumber = (numbers: number[]): number => {
    if (numbers.length === 0) {
        throw new Error("Array is empty");
    };
    let maxNumber: number = numbers[0]
    for (let num of numbers) {
        if (num > maxNumber) {
            maxNumber = num;
        }
    }
    return maxNumber;
}