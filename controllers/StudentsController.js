signIn.controller('StudentsCtrl', function StudentsCtrl($scope, AttendanceFactory) {
    $scope.students = AttendanceFactory.students;

    $scope.markPresent = function(student) {
        AttendanceFactory.markPresent(student);
    }
});
