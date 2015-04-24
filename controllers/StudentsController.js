var signIn.controller = function('StudentsCtrl', function StudentsCtrl($scope, AttendanceFactory) {
    $scope.students = AttendanceFactory.students;
});
