export default function getListStudentIds(arr) {
  let newArr = [];
  if (arr instanceof Array) {
    newArr = arr.map((item) => item.id);
  }
  return newArr;
}

// console.log(getListStudentIds('hello'));
// console.log(getListStudentIds(getListStudents()));
