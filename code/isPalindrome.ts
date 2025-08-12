const isLetter = (char: string): boolean => {
    return char.toLowerCase() !== char.toUpperCase();
}

const isPalindrome = (text: string): void => {
    let filtered: string = '';
    let reversed: string = '';

    for (let i = 0; i < text.length; i++) {
        if (isLetter(text[i])) {
            filtered += text[i].toLowerCase();
        }
    }

    for (let j = filtered.length - 1; j >= 0; j--) {
        reversed += filtered[j];
    }

    if (filtered === reversed) {
        console.log('It is a palindrome');
    } else {
        console.log('It is not a palindrome');
    }
}


isPalindrome('reconocer')
isPalindrome('Anita, lava la tina')