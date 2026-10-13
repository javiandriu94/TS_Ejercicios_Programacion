const findMaxIndex = (arr:number[]):number => {
    if(arr.length === 0) {
        throw new Error ("Array is empty")
    }
    let max:number = arr[0];
    let maxIndex:number = 0;

    for (let i= 1; i < arr.length; i++){
        if(arr[i] >= max){
            max = arr[i];
            maxIndex = i
        }
    }
    return maxIndex;
}