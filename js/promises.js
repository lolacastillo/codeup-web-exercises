"use strict";

function getGithubUsernames(username){
    let gitPromise = fetch(`https://api.github.com/users/${username}/events`,{headers : {'Authorization': `token ${promisesKey}`}});
    gitPromise.then(response => response.json()).then(events => console.log(new Date(events[0].created_at).toDateString()));
};

getGithubUsernames('larrycastillo2009');




function wait(num){
    const promise = new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve('resolved');
        },num);
    });
    promise.then(resonpnse =>console.log(resonpnse));
}

wait(1000);

