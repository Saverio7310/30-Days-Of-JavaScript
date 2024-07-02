const {countries} = require('../../data/countries_data')

/**
 * 
 * @param {Array} countries 
 * @param {*} num 
 */
/* function mostSpokenLanguages(countries, num){
    const langSet = countries.reduce((acc, obj) => {
        return acc.add(...obj['languages'])
    }, new Set())
    const langArr = Array.from(langSet)
    const langOcc = langArr.map((val) => {
        return {
            [val]: 0
        }
    })
    countries.forEach((obj) => {
        obj['languages'].forEach((lang) => {

        })
    })
} */

function mostSpokenLanguages(countries, num){
    const langMap = new Map()
    countries.forEach((obj) => {
        obj['languages'].forEach((lang) => {
            const previousValue = langMap.get(lang) || 0
            langMap.set(lang, previousValue + 1)
        })
    })
    const langArr = Array.from(langMap)
    langArr.sort((a, b) => b[1] - a[1])
    const langArrObj = langArr.map(([lang, occ]) => {
        return {
            [lang]: occ
        }
    })
    return num >= langArrObj.length ? langArrObj : langArrObj.slice(0, num)
}

console.log(mostSpokenLanguages(countries, 12));