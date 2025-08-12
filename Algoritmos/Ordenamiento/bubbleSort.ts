const bubbleSort = (arr:number[]): number[] => {
    const sortedArray: number[] = [...arr];
    const n = sortedArray.length;
    for (let i = 0; i< n-1; i++){
        for(let j = 0; j < n-i-1; j++){
            if (sortedArray[j] > sortedArray[j + 1]) {
                const temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
            }

        }
    }
    return sortedArray
}
console.log(bubbleSort([5, 3, 8, 4, 2]));