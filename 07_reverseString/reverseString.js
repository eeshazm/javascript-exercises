const reverseString = function(str) {
    // Loop version
    // length = str.length;
    // let reversed = '';
    // for (let i = str.length - 1; i >= 0 ; i--) {
    //     reversed += str[i];
    // }
    // return reversed;
    
    //Using built-in functions
    return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
