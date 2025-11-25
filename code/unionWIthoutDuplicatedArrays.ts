//Escribe una función que encuentre la unión de dos arreglos ordenados (sin duplicados).
const unionWithoutDuplicatedArrays = (arr1:number[], arr2:number[]): number[] => {
   let i:number = 0;
   let j:number = 0
   const result: number[] = [];
   let lastAdded: number | null = null;

   while(i < arr1.length && j < arr2.length) {
    let value;
    if(arr1[1] < arr2[j]){
        value = arr1[i++]
    }else {
        value = arr2[j++]
    }

    if (value !== lastAdded) {
        result.push(value)
        lastAdded = value
    }
   }

   while (i < arr1.length) {
        if (arr1[i] !== lastAdded) {
            result.push(arr1[i])
            lastAdded = arr1[i]
        }
        i++
   }

   while (j < arr2.length) {
        if (arr2[j] !== lastAdded) {
            result.push(arr2[j])
            lastAdded = arr2[j]
        }
        j++
   }
   return result

}