const express = require('express');
function add(a,b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

// export default {add, subract};
module.exports = {add, subtract};