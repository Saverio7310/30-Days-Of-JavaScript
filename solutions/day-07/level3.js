function userIdGeneratedByUser(){
    const length = Math.round(Math.random()*10)
    const IdsToGenerate = Math.round(Math.random()*10)
    const generateId = function(){
        let ID = ''
        for(let i=0; i<length; i++){
            const randomValue = Math.random()
            const charCode = Math.round(randomValue*126 + (1-randomValue)*33)
            const char = String.fromCharCode(charCode)
            ID+=char
        }
        return ID
    }
    const returnArr = []
    for(let i=0; i<IdsToGenerate; i++){
        returnArr.push(generateId())
    }
    return returnArr
}
function shuffleArray(arr){
    const returnArr = []
    const s = new Set()
    while(s.size != arr.length){
        s.add((Math.random()*(arr.length-1)).toFixed(0))
    }
    while(s.size != 0){
        const val = s.values().next().value
        returnArr.push(arr[val])
        s.delete(val)        
    }
    return returnArr
}
function sumOfArrayItems(arr){
    let sum = 0
    for (const el of arr) {
        if(isNaN(el) || typeof el !== 'number'){
            console.log(el, 'is not a number')
            continue
        }
        sum+=el
    }
    return sum
}
function sameDataType(arr){
    const type = typeof arr[0]
    for(let i=1; i<arr.length; i++)
        if(typeof arr[i] !== type)
            return false        
    return true
}
