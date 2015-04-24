signIn.factory('AttendanceFactory', function AttendanceFactory() {
    var factory = {};
    factory.students = [ {name: 'John Lennon', signIn: false },
                         {name: 'Barney', signIn: false },
                         {name: 'Pink Power Ranger', signIn: false },
                         {name: 'Lady Gaga', signIn: false },
                         {name: 'The Duke of Wellington', signIn: false },
                         {name: 'Napoleon', signIn: false },
                         {name: 'Edmund Dantes', signIn: false },
                         {name: 'Jesus Martinez', signIn: false },
                         {name: 'The Dude', signIn: false },
                         {name: 'Biggie Smalls', signIn: false },
                         {name: 'Joan of Ark', signIn: false },
                       ];

    factory.markPresent = function(student) {
        student.signIn = true;
    }

    return factory;
});
