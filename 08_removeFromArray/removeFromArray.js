const removeFromArray = function(arr, ...values) {
    newArr = [];
    arr.forEach((item) => {
        if (!values.includes(item)){
            newArr.push(item);
        }
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
