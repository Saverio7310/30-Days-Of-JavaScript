const { countries } = require('../../data/countries_data')

//name, capital and population
function sortBy(property) {
    return function (first, second) {
        if (first[property] < second[property])
            return -1
        else if (first[property] > second[property])
            return 1
        return 0
    }
}

//console.log(countries.sort(sortBy('name')));

countries.sort(sortBy('name'))

function mostSpokenLanguages(countries, num) {
    const langSet = new Set()
    countries.forEach((country) => {
        country['languages'].forEach((lang) => langSet.add(lang))
    })
    const arr = []
    langSet.forEach((lang) => {
        arr.push({
            language: lang,
            count: 0
        })
    })
    countries.forEach((country, index) => {
        country['languages'].forEach((lang) => {
            const langIndex = arr.findIndex((obj) => { return obj.language === lang })
            arr[langIndex].count += 1
        })
    })
    return arr.sort((a, b) => b.count - a.count).slice(0, num)
}

console.log(mostSpokenLanguages(countries, 3));

const statistics = {
    data: [],
    count: function () {
        return this.data.length
    },
    sum: function () {
        return this.data.reduce((acc, val) => acc + val, 0)
    },
    min: function () {
        let min = Number.MAX_VALUE
        this.data.forEach((val) => {
            if (val < min)
                min = val
        })
        return min
    },
    max: function () {
        let max = Number.MIN_VALUE
        this.data.forEach((val) => {
            if (val > max)
                max = val
        })
        return max
    },
    range: function () {
        return this.max() - this.min()
    },
    mean: function () {
        return this.sum() / this.count()
    },
    median: function () {
        this.data.sort((a, b) => a - b);
        const middleIndex = Math.floor(this.count() / 2);
        if (this.data.length % 2 === 0)
            return (this.data[middleIndex - 1] + this.data[middleIndex]) / 2;
        return this.data[middleIndex];

    },
    
    mode: function () {
        const arr = this.freqDist()
        const [freq, val] = arr[0]
        occ = freq / 100 * this.count()
        return {
            'mode': val,
            'count': occ
        }
    },
    var: function () {
        return (this.data.map((val) => (this.mean() - val) ** 2).reduce((acc, val) => acc + val, 0) / this.count()).toFixed(2)

    },
    std: function () {
        return Math.sqrt(this.var()).toFixed(2)
    },
    freqDist: function () {
        const nums = new Set(this.data)
        const arr = []
        nums.forEach((val) => {
            arr.push([0, val])
        })
        this.data.forEach((val) => {
            const ind = arr.findIndex((tuple) => tuple[1] === val)
            arr[ind][0] += 1
        })
        const freq = arr.map(([occ, val]) => {
            const freq = Math.round(occ / this.count() * 100).toFixed(1)
            return [Number.parseFloat(freq), val]
        })
        return freq.sort((a,b) => {
            return b[0] - a[0]
        })
    }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]


statistics.data = ages

console.log('Count:', statistics.count())
console.log('Sum: ', statistics.sum())
console.log('Min: ', statistics.min())
console.log('Max: ', statistics.max())
console.log('Range: ', statistics.range())
console.log('Mean: ', statistics.mean())
console.log('Median: ',statistics.median())
console.log('Mode: ', statistics.mode())
console.log('Variance: ',statistics.var())
console.log('Standard Deviation: ', statistics.std()) 
console.log('Frequency Distribution: ',statistics.freqDist())