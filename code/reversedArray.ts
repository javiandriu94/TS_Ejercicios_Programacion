const reversedArray = (arr: string[]): string[] => {
    let reversed: string[] = [];
    for(let i = arr.length -1; i >=0; i--){
        reversed.push(arr[i]);
    }
    return reversed;
}