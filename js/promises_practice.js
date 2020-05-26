'use strict';

function getGithubUsernames(){
    let gitPromise = fetch(`https://api.github.com/users`,{headers : {'Authorization': `token ${promisesKey}`}});
    gitPromise.then(response => {response.json().then(user => user.forEach((user => {console.log(user)})))});
    // gitPromise.then(response => response.json()).then(events => console.log(new Date(events[0].created_at).toDateString()));
};

getGithubUsernames();

