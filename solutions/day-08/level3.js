/* const personAccount = {
    firstName,
    lastName,
    incomes: [{ income, description }],
    expenses: [],
    totalIncome: function () { },
    totalExpense: function () { },
    accountInfo: function () { },
    addIncome: function () { },
    addExpense: function () { },
    accountBalance: function () { }
} */
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]
function signUp(newUser){
    for (const user of users) {
        if(newUser.hasOwnProperty('email') && user.email === newUser.email)
            return 'User already exists'
    }
    users.push(newUser)
    return 'User signed up'
}

console.log(signUp({
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false
}))
console.log(signUp({
    _id: 'ghderc',
    username: 'Thomas',
    email: 'cacca@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false
}))

function signIn(email, password){
    for (const user of users) {
        if(user.email === email){
            if(user.password === password){
                return 'User logged in'
            } else {
                return 'Wrong password'
            }
        }
    }
    return 'User not present'
}

console.log(signIn('cacca@thomas.com','123333'))
console.log(signIn('cacca@thomas.com', 'oadihfikuae'))
console.log(signIn('kmkmkmkm@kmkmkmkmkmkmk.kmkmkmkmkmk', 'kmkmkmkmkmkm'))

function rateProduct(productID, userID, rating){
    for (const prod of products) {
        if(prod._id !== productID){
            continue
        }
        let index 
        let checkRating = false
        for (const [i, rat] of prod.ratings.entries()) {
            if(rat.userId === userID){
                checkRating = true
                index = i
            }
        }
        if(checkRating){
            prod.ratings[index] = {userId: userID, rate: rating}
            return 'Rating updated'
        } else {
            prod.ratings.push({userId: userID, rate: rating})
            return 'Rating added'
        }
    }
    return 'Product not found'
}
console.log(rateProduct('wefgwef', 'afasdf', 10))
console.log(rateProduct('hedfcg', 'ab12ex', 5))
console.log(rateProduct('hedfcg', 'ab12ex', 10))

function avgRating(productID){
    for (const prod of products) {
        if(prod._id !== productID)
            continue
        let avg = 0
        for (const rating of prod.ratings) {
            avg += rating.rate
        }
        return `The average rating of this product is ${avg/prod.ratings.length}`
    }
    return 'Product not found'
}
console.log(avgRating('eedfcf'))
console.log(avgRating('wetqg'))

function likeProduct(productID, userID){
    for (const prod of products) {
        if(prod._id !== productID)
            continue
        const index = prod.likes.indexOf(userID)
        if(index >= 0){
            prod.likes.splice(index, 1)
            return 'Like removed'
        }
        prod.likes.push(userID)
        return 'Like added'
    }
    return 'Product not found'
}

console.log(likeProduct('ewfwfqdewd', 'weoufwe'))
console.log(likeProduct('aegfal', 'fg12cy'))
console.log(likeProduct('aegfal', 'fg12cy'))
console.log(likeProduct('eedfcf', 'fg12cy'))