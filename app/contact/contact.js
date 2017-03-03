(function () {
    'use strict';
    var controllerId = 'contact';
    angular.module('app').controller(controllerId, ['common', contact]);

    function contact(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'How to Contact Me';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Contact Me View'); });
        }
    }

})();