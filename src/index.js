module.exports = function reverse (n) {
    let str =n.toString().split('');
    if(str[0] == '-') {
        str = str.slice(1,str.length).reverse();
        str.unshift('+');
        return str.join('');
    }
      return +(n.toString().split('').reverse().join(''));
}
