const students = require('../attendance/data');

const getAttendanceRate = (student) => {
    const { attendance } = student;
    return (attendance.filter(rate => rate).length / attendance.length) * 100
}

const getAvgScore = (student) => {
    const { testScores } = student;
    return testScores.reduce((acc, curr) => acc + curr, 0) / testScores.length;
}

const underPerformStudents = (students) => {
    return students
    .filter(student => getAttendanceRate(student) < 80 && getAvgScore(student) < 70)
    .map(student => ({
        name: student.name,
        attendanceRate: getAttendanceRate(student),
        avgScore: getAvgScore(student)
    }));
}

console.log(getAttendanceRate(students[0]));
console.log(getAvgScore(students[0]));
console.log(underPerformStudents(students));