'use strict';

// Complete this algo
const minJumps = arr => {
    let index = 0
    let maxJumps = arr[0]
    let jumps = 0
    let max = 0
    
    while (index + maxJumps < arr.length){
        max = Math.max(...arr.slice(index, index + maxJumps))
        index = arr.indexOf(max)
        console.log(index)
        maxJumps = arr[index]
        jumps++
    }
    return jumps
};

module.exports = minJumps