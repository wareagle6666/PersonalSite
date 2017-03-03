(function () {
    'use strict';
    var controllerId = 'certification';
    angular.module('app').controller(controllerId, ['common', certification]);

    function certification(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Our Resources';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Certification View'); });
        }
    }
})();