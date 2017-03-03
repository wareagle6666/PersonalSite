(function () {
    'use strict';
    var controllerId = 'work';
    angular.module('app').controller(controllerId, ['common', work]);

    function work(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Our History';
        vm.saints = 'Our Saints'
        vm.believe = 'Our Beliefs'

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('You are not at Our History page'); });
        }
    }
})();