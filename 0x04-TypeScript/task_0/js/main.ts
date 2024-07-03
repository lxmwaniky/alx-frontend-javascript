interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'Alex',
  lastName: 'Nyambura',
  age: 19,
  location: 'Kenya'
}

const student2: Student = {
  firstName: 'Sharon',
  lastName: 'Biwott',
  age: 18,
  location: 'Kenya'
}

const studentList: Array<Student> = [student1, student2];