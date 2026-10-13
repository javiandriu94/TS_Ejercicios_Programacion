const rotateLeft = (arr:number[]):number[] => {
    if (arr.length === 0) return arr;
    let firstElement:number = arr.shift()!;
    arr.push(firstElement);
    return arr;
}