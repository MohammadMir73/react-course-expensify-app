////Object Destructuring

const person = {
    pname:'Mohammad',
    age: 27,
    location: {
        city: 'Tehran',
        temp: 10
    }
};

const { pname: firstName = 'Anonymous', age } = person;
const { city, temp: temperature } = person.location

console.log(`${firstName} is ${age} years old from ${city}.`)

if( temperature && city ){
    console.log(`Its's ${temperature} in ${city}.`);
}

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name:'Penguin'
    }
}

const { name: publisherName = 'Self Published' } = book.publisher;

console.log(publisherName);

////Array Destructuring

// const address = ['Gisha', 'Tehran', 'Iran', '77'];

// const [, city = 'Yazd', country ] = address;

// console.log(`You are in ${city} ${country}`);

// const item = ['Coffe (iced)', '$2.00', '$4.50', '$2.75'];

// const [itemName, , mediumPrice] = item;

// console.log(`A medium ${itemName} costs ${mediumPrice}`);
