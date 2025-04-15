const bubbleSort = (arr:number[]):number[] => {
    for(let i:number = 0; i < arr.length; i++){
        for(let j:number = 0 ; j < arr.length -i -1 ; j++){
            if(arr[j] > arr[j+1]){
                let temp:number = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }               
    }
    return arr;
}