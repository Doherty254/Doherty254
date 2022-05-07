// Object - anything non primitive type

const course = {
    id: 1002,
    name: 'programming',
    instructor: 'azron',
    completedCapstoneProject: false,
    students: ['dickson', 'collins', 'albert', 'brenda', 'valarie'],
    studentsEnrolled: function() {
        return this.students.length

    }
}

// accessing object properties
// 1. bracket notation

console.log(course['name'])   // programming

// calling object method (method is a function associated with an object)

console.log(course.studentsEnrolled())


// 2. Dot notation

console.log(course.instructor)  // azron