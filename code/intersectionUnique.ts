const intersectionUniqueElements = (arr1: number[], arr2:number[]):number[] => {
    let i: number = 0
    let j: number = 0
    let result: number [] = []
    let lastAdded: number | null = null

    while(i< arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]){
            i++
        }else if (arr1[i] > arr2[j]){
            j++
        }else {
            const value = arr1[i]
            if(value !== lastAdded){
                result.push(value)
                lastAdded = value
            }
            i++
            j++
        }
    }
    return result 
}