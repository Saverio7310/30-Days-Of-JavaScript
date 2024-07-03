paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

/**
 * 
 * @param {string} str 
 */
function tenMostFrequentWords(str){
    const words = str.match(/\w+/g)
    const map = new Map()
    words.forEach((word) => {
        const prevVal = map.get(word) | 0
        map.set(word, prevVal + 1)
    })
    return map
}

console.log(tenMostFrequentWords(paragraph))