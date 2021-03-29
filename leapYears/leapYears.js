const leapYears = function(testYear) {
// branch one - flow stops for years that are definitely not leap years
if (testYear % 4 != 0) {
    return false;
}
// branch two - for possible leap years, which face a further subtest
else if (testYear % 4 == 0) {
    if (testYear % 100 == 0 && testYear % 400 !=0) {
        return false;
    } else return true;
}
}
module.exports = leapYears

