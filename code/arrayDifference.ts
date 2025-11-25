//. Encontrar la diferencia entre dos arreglos ordenados
// Devuelve los elementos que están en arr1 pero NO en arr2.

const arrayDifference = (arr1:number[], arr2:number[]):number[] => {
    let i: number = 0;
    let j: number = 0
    let result : number [] = []

    while(i<arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }else if (arr1[i] > arr2[j]) {
            j++
        }else {
            i++
            j++
        }
    }
    while(i< arr1.length) result.push(arr1[i++])

    return result
}