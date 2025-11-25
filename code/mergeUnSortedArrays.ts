const bubbleSort = (arr:number[]): number[] => {
    let sortedArray: number [] = [...arr]
    for (let i = 0; i < sortedArray.length ; i ++) {
        for(let j = 0; j < sortedArray.length ; j++) {
            if(sortedArray[j] > sortedArray[j+1]) {
                let temp = sortedArray[j];
                sortedArray[j] = sortedArray[j+1]
                sortedArray[j+1] = temp
            }
        }
    }
    return sortedArray
}

const mergeUnsortedArrays= (arr1: number[], arr2:number[]): number[] => {
 const combinedArray : number [] = [...arr1, ...arr2]

 return bubbleSort(combinedArray)
}