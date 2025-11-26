const grades = [85, 90, 75, 96, 60, 55];

function addGrade(grade) {
  grades.push(grade);
}
addGrade();



function removeFailingGrades() {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 70) {
      grades.splice(i, 1);
      i--;
    }
  }
}
removeFailingGrades();


function printGrades() {
  for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
  }
}

printGrades();




const guests = ["Anna", "", "George", "", "Saba", "Nick", ""];


function cleanList(list) {
  const cleaned = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i] !== "") {
      cleaned.push(list[i]);
    }
  }

  return cleaned;
}

const filteredGuests = cleanList(guests);
console.log(filteredGuests);
