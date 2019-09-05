'use strict';

//Complete this algo
const isLoop = (linkedList, slow = linkedList.head, fast = linkedList.head.next) => {
    if (slow === fast) return true
    else if (!fast) return false
    else return isLoop(linkedList, slow.next, fast.next.next)
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop