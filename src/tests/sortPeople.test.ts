import { sortPeople } from "../sortPeople";

describe('sortPeople', () => {
  test('should sort people by full name', () => {
    const people = [
      { firstName: 'John', lastName: 'Doe' },
      { firstName: 'Jane', lastName: 'Doe' },
      { firstName: 'John', lastName: 'Smith' },
    ];
    const sortedPeople = [
      { firstName: 'Jane', lastName: 'Doe' },
      { firstName: 'John', lastName: 'Doe' },
      { firstName: 'John', lastName: 'Smith' },
    ];
    expect(sortPeople(people)).toEqual(sortedPeople);
  });
});
