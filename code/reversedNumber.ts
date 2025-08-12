const reversedNumber = (num:number): number => {
    let reversed:number = 0;
    while(num > 0 ) {
        reversed = reversed * 10 + (num%10);
        num = Math.floor(num/10)
    }
    return reversed
}

console.log(reversedNumber(6281))