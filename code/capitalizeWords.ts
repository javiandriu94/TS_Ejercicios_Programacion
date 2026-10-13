const capitalizeWord = (text:string):string => {
    if(!text) return "";
    const words: string[] = text.trim().split(" ");
    const capitalizeWords: string [] = [];

    for (let word of words) {
        if(words.length >0){
            const capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase();
            capitalizeWords.push(capitalized)
        }
    }
    return capitalizeWords.join(" ");


}