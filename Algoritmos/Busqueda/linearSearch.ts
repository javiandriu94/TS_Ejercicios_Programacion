const linearSearch = (arr:number[], target:number):number => {
    
    for(let i:number = 0; i< arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1
}