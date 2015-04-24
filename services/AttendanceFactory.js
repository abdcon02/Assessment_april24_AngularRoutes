signIn.factory('AttendanceFactory', function AttendanceFactory() {
    var factory = {};
    factory.students = [ {name: 'John Lennon', inClass: false },
                         {name: 'Barney', inClass: false },
                         {name: 'Pink Power Ranger', inClass: false },
                         {name: 'Lady Gaga', inClass: false },
                         {name: 'The Duke of Wellington', inClass: true },
                         {name: 'Napoleon', inClass: true },
                         {name: 'Edmund Dantes', inClass: false },
                         {name: 'Jesus Martinez', inClass: false },
                         {name: 'The Dude', inClass: false },
                         {name: 'Biggie Smalls', inClass: false },
                         {name: 'Joan of Ark', inClass: false },
                       ];

    factory.changeAttendance = function(student) {
        if(!student.inClass) {
            student.inClass = true;
        } else {
            student.inClass = false;
        }
    };

    return factory;
});
