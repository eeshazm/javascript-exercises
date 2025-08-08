const palindromes = function (str) {
    left = 0;
    right = str.length -1;
    str = str.toLowerCase();
    while (left < right) {
        if (str[left] === ' ' || str[left] === ',' || str[left] === '.' || str[left] === '!' || str[left] === '?') {
            left++;
        } else if (str[right] === ' ' || str[right] === ',' || str[right] === '.' || str[right] === '!' || str[right] === '?') {
            right--;
        } else if (str[left] !== str[right]) {
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
    
};

// Do not edit below this line
module.exports = palindromes;
