signIn.controller('StudentsCtrl', function StudentsCtrl($scope, AttendanceFactory) {
    $scope.students = AttendanceFactory.students;

    $scope.changeAttendance = function(student) {
        AttendanceFactory.changeAttendance(student);
    }
});
