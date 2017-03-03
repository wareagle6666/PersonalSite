(function () {
    'use strict';
    var controllerId = 'skills';
    angular.module('app').controller(controllerId, ['common', skills]);

    function skills(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Skills';
        vm.military = 'Military Skills'
        vm.computer = 'Computer Science Skills'

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Skills View'); });
        }
    }
})();