type Person = {
    firstName: string;
    lastName: string;
  };
  
export function sortPeople(people: Person[]): Person[] {
    return people.sort(function(a, b) {
      const nameA = a.firstName + ' ' + a.lastName;
      const nameB = b.firstName + ' ' + b.lastName;
  
      if (nameA < nameB) {
        return -1;
      }
  
      if (nameA > nameB) {
        return 1;
      }
  
      return 0;
    });
  }
  