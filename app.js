function sumStrings(a, b) {
    const aNum = parseInt(a), bNum = parseInt(b);

    function getErrorMessage(param) {
        return `Oops! '${param}' is not a number...`;
    }

    function padZeros(num, length) {
        const padVal = 0;
        num = num + '';
        return num.length >= length ? num : new Array(length - num.length + 1).join(padVal) + num;
    }

    if(aNum !== aNum) {
        throw new Error(getErrorMessage(a));
    } else if(bNum !== bNum) {
        throw new Error(getErrorMessage(b));
    }

    if (a.length >= b.length) {
        b = padZeros(b, a.length, '0');
    } else {
        a = padZeros(a, b.length, '0');
    }

    a = a.split(''); b = b.split('');

    let carryFwd = 0;
    const sum = [];
    for(let i=a.length-1; i >= 0; i--) {
        let val = (parseInt(a[i]) + parseInt(b[i]) + carryFwd).toString();
        val = val.split('');
        const valToSum = val.splice(val.length - 1, 1);
        carryFwd = val.length == 1 ? parseInt(val.join('')) : 0;
        sum.unshift(valToSum.join(''));
    }
    carryFwd > 0 ? sum.unshift(carryFwd) : ''
    return sum.join('');
}

console.log(sumStrings('1', '2'));
console.log(sumStrings('800', '9567'));
console.log(sumStrings('99', '1'));
console.log(sumStrings('00103', '08567'));
console.log(sumStrings('50095301248058391139327916261', '81055900096023504197206408605'));
