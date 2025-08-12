const removeDuplicateNumber = (arr: number[]):number[] => {
    let arr2 : number[] = []
    for (let i=0; i < arr.length ; i++) {
        let found: boolean = false;
        for (let k=0; k < arr2.length; k++){
            if(arr2[k]=== arr[i]) {
                found = true;
                break
            }
        }
        if (!found) {
            arr2.push(arr[i])
        }
    }
    let sortedArray: number[] = [...arr2]
    for(let i=0; i< sortedArray.length; i++) {
        for (let j=0;  j< sortedArray.length-i-1; j++){
            if(sortedArray[j]>sortedArray[j+1]){
                let temp = sortedArray[j];
                sortedArray[j]=sortedArray[j+1];
                sortedArray[j+1]=temp
            }

        }
    }
    return sortedArray;
}

console.log(removeDuplicateNumber([3,4,14,6,1,5,6,1,5,8,9]))