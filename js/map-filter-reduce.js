"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// =========================Exercise Solutions===============================

// Problem 2
var threeLanguages = users.filter(function(person){
    return person.languages.length >= 3;
});

let threeLangs = users.filter((user)=> user.languages.length > 2);

// console.log(threeLanguages);

// Problem 3
var usersEmail = users.map(function(person){
    return person.email;
});

const filteredEmails = user.map(user=> {
    return user.email;
});
// console.log(usersEmail);

// Problem 4
const totalExp = users.reduce((total,userYoe)=> {
    return total + userYoe.yearsOfExperience;
},0);

const averageExp = totalExp / users.length;


// console.log(totalExp);
// console.log(users[0].yearsOfExperience);

// Problem 5
const longestEmail = users.reduce((email, usersEmail)=> (email.length > usersEmail.email.length) ? email : usersEmail.email, "");
// console.log(longestEmail);

// Problem 6
const nameString = users.reduce((nString, usersName)=> {
    return nString + (usersName.name + " ");
},"Your instructors are: ");

console.log(nameString);

