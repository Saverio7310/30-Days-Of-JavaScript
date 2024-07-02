const { countries } = require('../../data/countries_data')

for (const { name, capital, languages, population, flag, region, area } of countries) {

}
for (const { name, capital, languages, population } of countries) {
    console.log(`Name ${name}, capital ${capital}, population ${population}, languages ${languages}`);
}

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, skills, [, , jsScore, reactScore]] = student
console.log(name, skills, jsScore, reactScore)

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(arr) {
    const result = []
    for (const [name, skills, scores] of arr) {
        result.push({ name, skills, scores })
    }
    return result
}

console.log(convertArrayToObject(students))

const student2 = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

const newStudent = {
    ...student2,
    skills: {
        ...student2.skills,
        frontEnd: [
            ...student2.skills.frontEnd,
            { skill: 'Bootstrap', level: 8 }
        ],
        backEnd: [
            ...student2.skills.backEnd,
            { skill: 'Express', level: 9 }
        ],
        dataBase: [
            ...student2.skills.dataBase,
            { skill: 'SQL', level: 8 }
        ],
        dataScience: [
            ...student2.skills.dataScience,
            'SQL'
        ]
    }
}

console.log(JSON.stringify(newStudent, null, 2));