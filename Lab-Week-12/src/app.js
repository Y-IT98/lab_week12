// Part 2 
function selected_element(inputted_element){
    let select_element = document.querySelector(inputted_element)
    return select_element
    }
    console.log(selected_element)




//Part 4
// I attempted trying to split this into seperate functions but the way i have this loop it was quite difficult for me to do that with how limited my javascript knowledge is.
const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]
  
  const studentsScholarship = []
  
  
  

  
function scholarship(students){
    
      const studentsScholarship = []
    
      
    
      for (const name_student  of students) 
      {
          let grade_sum = 0
          for (const grades of name_student.grades){
              grade_sum = grades + grade_sum;
    
          }
          let number = grade_sum/name_student.grades.length;
          if (number >= 80){
              const grades = {name: name_student.name, gradeAvg: number}
              studentsScholarship.push(grades)}
      }
      console.log(studentsScholarship)
}
scholarship(students)



  
  
  
  

