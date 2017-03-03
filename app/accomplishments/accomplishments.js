(function () {
    'use strict';
    var controllerId = 'accomplishments';
    angular.module('app').controller(controllerId, ['common', '$http', accomplishments]);

    function accomplishments(common, $http) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Accomplishments';
        vm.role = 'List of Accoplishments:'
        vm.list = ['Was the Lead Develoepr for Veolia North America (SourceOne) and re-designed their web application from top to bottom http://www.emsys1.com',
        'Served as Lead Programmer and Web developer on Capstone Project in ASP.NET for Savannah River Nuclear Services (Trouble Shooting Ticketing System)',
        'Maintainer of Georgia Regents University, Testing and Disability Department Website http://www.gru.edu/military/testing-disability.php',
        'Developed Saint Augustine Coptic Orthodox Church Website http://www.suscopts.org/staugustineaugusta/',
        'Developed Archangel Michael Coptic Orthodox Church Website http://www.suscopts.org/archangelmichaelmacon/',
        'Developed of managing system to the Youth Training Company, resulting in a 50% increase in employee productivity',
        'My Portfolio website http://www.aboutmewebsite.net/',
        'Was awarded the Microsoft JavaScript Professional Certifications',
        'Attended 2 Microsoft Visual Studio Live',
        'Member of Hack August Organizaiton',
        'Attended Hackathon'
        ];
       
        activate();
        
        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Accomplishments View'); });
        }
    }
})();