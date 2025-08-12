const isLetter = (char: string): boolean => {
    return char.toLowerCase() !== char.toUpperCase();
}

const vowelAndConsonantCounter = (text:string):{ vowels: number, consonants: number } => {
    let vowels:string = 'aeiou';
    let vowelCount:number = 0;
    let consonantCount:number = 0;
    let filtered:string = '';
    for (let i=0; i < text.length; i++) {
        const char = text[i].toLowerCase()
        if(isLetter(text[i])){
            let isVowel = false;
            for(let j=0; j<vowels.length; j++){
                if(char === vowels[j]){
                    isVowel =true;
                    break;
                }
            }
            if(isVowel){
                vowelCount ++;
            }else{
                consonantCount++
            }
        }

    }

    
    return {vowels: vowelCount,  consonants: consonantCount}
}

console.log(vowelAndConsonantCounter('hello world'))