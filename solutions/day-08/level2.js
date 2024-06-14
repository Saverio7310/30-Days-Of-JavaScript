const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

let selected
let maxSkills = 0
for (const [name, person] of Object.entries(users)) {
    if(person.skills.length > maxSkills){
        selected = name
        maxSkills = person.skills.length
    }
}
console.log(selected)

let countLoggedIn = 0
let countPoints = 0
for (const user of Object.values(users)) {
    if (user.isLoggedIn)
        countLoggedIn++
    if (user.points >= 50)
        countPoints++
}
console.log(`${countLoggedIn} users are logged in; ${countPoints} users have at least 50 points`)

function checkUser(arr){
    let check = 0
    const mernStrings = ['MongoDB', 'Express', 'React', 'Node']
    for (const skill of mernStrings) {
        if(arr.includes(skill))
            check++
    }
    return check === 4
}

const mernDev = []
for (const [name, person] of Object.entries(users)) {
    const check = checkUser(person.skills)
    if (check)
        mernDev.push(name)
}
console.log(mernDev)

const newUsers = Object.assign({
    myName: {
        email: 'myName@myName.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 5000
    }
}, users)
console.log(newUsers)