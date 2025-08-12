const isLetter = (char: string):boolean => {
    return char.toLowerCase() !== char.toUpperCase()
}

const reversedString = (text:string):string => {
    let filtered:string = '';
    let reversed:string = '';
    let n = text.length
    for (let i = 0; i < n; i++ ){
        if(isLetter(text[i])){
            filtered+=text[i].toLowerCase()
        }
    }
    n = filtered.length
    for (let j = n-1; j >= 0; j--){
        reversed += filtered[j]
    }
    return reversed;

}

console.log(reversedString('Hello world'))