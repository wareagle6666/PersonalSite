(function () {
    'use strict';
    var controllerId = 'skills';
    angular.module('app').controller(controllerId, ['common', skills]);

    function skills(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Skills';
        vm.role = 'Skills List:';

        vm.military = 'Military Skills';
        vm.militaryList = ['Leadership',
        'Survival',
        'Weapon Specialist',
        'Tactical Skills',
        'Hand Combate Skills',
        'Airborne',
        'Air Assault',
        'Pathfinder',
        'Halo'];

        vm.computer = 'Computer Science Skills';
        vm.computerList = ['Databases',
        'JavaScript',
        'CSS',
        'VB.NET',
        'C++',
        'C#',
        'Linq',
        'Bash',
        'AngularJS',
        'DurandalJS',
        'BreezJS',
        'HTML5',
        'SQL',
        'Bootstrap',
        'SPA',
        'jQuery UI',
        'KnockoutJS',
        'Web Applications',
        'Assembly',
        'ASP.NET',
        'AJAX',
        'MVC',
        'PHP',
        'Java',
        'Razor',
        'TCP/IP',
        'IIS',
        'Windows Server',
        'Python',
        'Bamboo',
        'Github',
        'Stash',
        'VMware ESXi',
        'Kendo Ui',
        'Internet Information Services (IIS)',
        'Xamarin',
        'Objective C',
        'Entity Framework',
        'Network Security',
        'Leadership'];

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Skills View'); });
        }
    }
})();