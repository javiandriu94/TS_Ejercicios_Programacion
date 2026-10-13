const cleanString = (str: string): string => {
  let text:string = "";
  for (let char of str){
    if (char !== "#") {
        text+=char;
    }else {
        text.slice(0, -1);
    }
  }
  return text;
}

cleanString("abc#d##c"); // Output: "ac"