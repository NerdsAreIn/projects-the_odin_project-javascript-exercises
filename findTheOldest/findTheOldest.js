const findTheOldest = function(people) {
    let oldest;
    let age1;
    let age2;
    const currentYear = new Date().getFullYear();
    const peopleSorted = people.sort((personA, personB) => {
        age1 = personA.yearOfDeath - personA.yearOfBirth;
        age2 = personB.yearOfDeath - personB.yearOfBirth;
        if (personA.yearOfDeath == null) {
            age1 = currentYear - personA.yearOfBirth;
	}
        if (personB.yearOfDeath == null) {
	    age2 = currentYear - personB.yearOfBirth;	
        }
        if (age1 < age2) {
            return 1;
        }   
     });
    oldest = peopleSorted[0];
    return oldest; 
}


module.exports = findTheOldest;
