(function () {
    'use strict';
    var controllerId = 'education';
    angular.module('app').controller(controllerId, ['common', 'datacontext', education]);

    function education(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Education';
        vm.schoolName = 'Georgia Regents University'
        vm.schoolDate = '2011 - 2014';
        vm.classTitle = 'Classes List:';
        vm.courses = ['Coursework in Web Design and Development',
        'Coursework in Web Programming',
        'Coursework in C++, C#, C',
        'Coursework in Assembly',
        'Coursework in JavaScript',
        'Coursework in ASP.NET',
        'Coursework in Software Engineering',
        'Coursework in Network Security',
        'Coursework in Information Technology',
        'Coursework in AI',
        'Coursework in DataStructure',
        'Coursework in Database',
        'Coursework in Computer Organization'];

        activate();

        function activate() {
            var promises = [getEducation()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Education View'); });
        }

        function getEducation() {
            return datacontext.getEducation().then(function (data) {
                return vm.education = data;
            });
        }
    }
})();