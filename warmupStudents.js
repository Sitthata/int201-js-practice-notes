const students = [
    {
        name: 'Sophia',
        attendance: [true, true, false, true, true],
        testScores: [88, 92, 85, 78, 90]
    },
    {
        name: 'Mason',
        attendance: [true, true, true, true, false],
        testScores: [50, 82, 60, 75, 62]
    },
    {
        name: 'Isabella',
        attendance: [true, false, false, false, false],
        testScores: [68, 71, 70, 60, 78]
    },
    {
        name: 'Liam',
        attendance: [true, true, true, true, true],
        testScores: [90, 87, 92, 88, 95]
    },
    {
        name: 'Olivia',
        attendance: [true, true, true, true, false],
        testScores: [72, 78, 75, 80, 62]
    }
];

const getAttendanceRate = (students) => {
    const { attendance } = students;
    let percentage = 0;
    attendance.forEach((rate) => {
        if (rate) percentage += 1;
    });
    return (percentage / attendance.length) * 100;
}

const getAvgScore = (student) => {
    const { testScores } = student;
    const totalScore = testScores.reduce((acc, curr) => acc + curr, 0);
    return totalScore / testScores.length;
}

const underPerformStudent = (students) => {
    const dangerStudents = students.filter(student => getAvgScore(student) < 70 && getAttendanceRate(student) < 80);
    return dangerStudents.map((student) => (
        {
            name: student.name,
            attendanceRate: getAttendanceRate(student),
            avgScore: getAvgScore(student)
        }
    ));
}

console.log(getAttendanceRate(students[0]));
console.log(getAvgScore(students[0]));
console.log(underPerformStudent(students));