const findMinIndex = (arr: number[]): number => {
    if (arr.length === 0) {
        throw new Error ("Array is empty")
    }

    let minNumber: number = arr[0];
    let index: number = 0

    for (let i= 1; i < arr.length; i++){
        if(arr[i] <= minNumber){
            minNumber = arr[i];
            index = i;
        }
    }
    return index

}