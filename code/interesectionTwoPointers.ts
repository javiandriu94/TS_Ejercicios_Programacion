//Escribe una función que encuentre la intersección de dos arreglos ordenados.
const interesctionArrays= (arr1:number[], arr2:number[]): number[] => {
    let i: number = 0;
    let j: number = 0;
    let result : number[] = []

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            i++
        }else if (arr1[i] > arr2[j]) {
            j++
        }
        else {
            result.push(arr1[i])
            i++
            j++
        }
    }

    return result

}