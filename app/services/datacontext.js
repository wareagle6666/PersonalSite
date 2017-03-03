(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId,
        ['common', datacontext]);

    function datacontext(common) {
        var $q = common.$q;

        var service = {
            getEducation: getEducation,
        };

        return service;

        function getEducation() {
            var education = [
                { Type: 'Coursework', Course: 'Web Design and Development' },
                { Type: 'Coursework', Course: 'Web Programming' },
                { Type: 'Coursework', Course: 'C++' },
                { Type: 'Coursework', Course: 'C#' },
                { Type: 'Coursework', Course: 'C' },
                { Type: 'Coursework', Course: 'Assembly' },
                { Type: 'Coursework', Course: 'JavaScript' },
                { Type: 'Coursework', Course: 'ASP.NET' },
                { Type: 'Coursework', Course: 'Software Engineering' },
                { Type: 'Coursework', Course: 'Network Securit' },
                { Type: 'Coursework', Course: 'Computer Graphics' },
                { Type: 'Coursework', Course: 'Operating Systems' },
                { Type: 'Coursework', Course: 'Computer Organization' },
                { Type: 'Coursework', Course: 'Database' },
                { Type: 'Coursework', Course: 'Internet Programing' },
                { Type: 'Coursework', Course: 'System Admin' }

            ];
            return $q.when(education);
        }
    }
})();