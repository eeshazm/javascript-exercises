const fibonacci = function(num) {
    if (num < 0) {  // Check for negative input
        return "OOPS";
    }
    if (typeof num !== 'number') {  // Convert string input to number
        num = parseInt(num);
    }
    if (num === 0)
            return 0;
    if (num === 1 || num === 2)
            return 1;   
    let fibonacci = [1,1];
    for (let i = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }

    return fibonacci[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
