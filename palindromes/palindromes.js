const palindromes = function(string) {
    const newString = string.match(/[a-z]/gi).reverse().join("");
    string = string.match(/[a-z]/gi).join("");
    if (newString.toLowerCase() == string.toLowerCase()) {
        return true;
    }
    else return false;
}

module.exports = palindromes
