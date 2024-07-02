const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway', 'Italy', 'France']

const emptySet = new Set()

const numsSet = new Set()
for (let index = 0; index < 11; index++) {
    numsSet.add(index)
}
numsSet.delete(0)
numsSet.clear()

const count = new Set(countries)
console.log(count);

const countriesMap = new Map()
for (const c of countries) {
    countriesMap.set(c, c.length)
}
console.log(countriesMap);