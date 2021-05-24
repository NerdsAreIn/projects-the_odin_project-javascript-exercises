let findTheOldest = function(people) {
    let oldest;
    let age1;
    let age2;
    const peopleSorted = people.sort((personA, personB) => {
        age1 = personA.yearOfDeath - personA.yearOfBirth;
        age2 = personB.yearOfDeath - personB.yearOfBirth;
        if (personA.yearOfDeath == null) {
            let currentYear = new Date().getFullYear();
            age1 = currentYear - personA.yearOfBirth;
        }
        if (age1 < age2) {
            return 1;
        }   
     });
    oldest = peopleSorted[0];
    return oldest; 
}


module.exports = findTheOldest
