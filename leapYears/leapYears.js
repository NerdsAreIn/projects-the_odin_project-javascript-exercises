const leapYears = function(testYear) {
if (testYear % 4 != 0) {
    return false;
}
else if (testYear % 4 == 0) {
    if (testYear % 100 == 0 && testYear % 400 !=0) {
        return false;
    } else return true;
}
}
module.exports = leapYears

