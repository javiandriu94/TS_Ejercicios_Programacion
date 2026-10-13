const filterByLength = (arr: string[], minLength:number):string [] => {
    const minStrings : string [] = [];
    for (let word of arr) {
        if(word.length >= minLength) {
            minStrings.push(word)
        }
    }
    return minStrings;
}