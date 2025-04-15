import { bubbleSort } from "../Ordenamiento/bubbleSort";
const binarySearch = (arr: number[], target: number): number => {
    let sortedArray: number[] = bubbleSort(arr)
    let middle:number = Math.floor((sortedArray.length)/2);
    let left:number = 0;
    let right:number = sortedArray.length-1;
    
    while(left<=right){
        if(sortedArray[middle]=== target){
            return middle
        }else if (sortedArray[middle] < target){
            left = middle + 1;
        }else {
            right = middle - 1;
        }
    }
    return -1;
    
}