"use strict";

const gitPromise = fetch({headers : {'Authorization': `token ${promisesKey}`}});
console.log(gitPromise);
// let getCommit = (name) => new Promise()