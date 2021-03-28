const ftoc = function(fahrenheitTemp) {
    let celsiusTemp = (+fahrenheitTemp - 32) * 5/9;
    if (celsiusTemp != 0) {
        celsiusTemp = Number(celsiusTemp.toFixed(1));
    }
    return celsiusTemp;
}

const ctof = function(celsiusTemp) {
    let fahrenheitTemp = +celsiusTemp * 9/5 + 32;
    if (fahrenheitTemp.toString().match(/\./)) {
        fahrenheitTemp = Number(fahrenheitTemp.toFixed(1));
    } 
    return fahrenheitTemp;
}

module.exports = {
  ftoc,
  ctof
}
