// 1. Write a function to merge two sorted arrays into a single sorted array (without using sort()).
const mergeSortedArray = (arr1: number[], arr2: number[]): number[] => {
    let i = 0;
    let j = 0;
    const result : number [] = []

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length) result.push(arr1[i++])
    while(j < arr2.length) result.push(arr2[j++])

    return result
}