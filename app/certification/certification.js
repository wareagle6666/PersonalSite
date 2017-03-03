(function () {
    'use strict';
    var controllerId = 'certification';
    angular.module('app').controller(controllerId, ['common', certification]);

    function certification(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Certifications';
        vm.role = 'Certifications List:'
        vm.list = ['Microsoft Professional JavaScript Certifications Jul 2016 - Jul 2018',
        'A+ Certifications Nov 2014',
        'Basic Security Defense Assurance Nov 2014'];

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Certification View'); });
        }
    }
})();