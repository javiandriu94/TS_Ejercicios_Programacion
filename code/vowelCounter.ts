const vowelCounter = (str:string):number => {
  let count:number = 0;
  const vowels:string = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

vowelCounter("Hello World"); // Output: 3