const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const union = [...a, ...b]

const unionSet = new Set(union)

const intersectionSet = new Set()

for (const val of a) {
    b.includes(val) ? intersectionSet.add(val) : null
}

const differenceSet = new Set()

for (const val of a) {
    b.includes(val) ? null : differenceSet.add(val)
}

console.log(differenceSet);