(function () {
    'use strict';
    var controllerId = 'accomplishments';
    angular.module('app').controller(controllerId, ['common', '$http', accomplishments]);

    function accomplishments(common, $http) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        var mydata;
        $http.get('http://calendar.google.com/calendar/embed?title=St.Mary%20%26%20St.George%20Coptic%20Orthodox%20Church&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffff33&amp;src=saintmaryandsaingeorge%40gmail.com&amp;color=%231B887A&amp;src=en.usa%23holiday%40group.v.calendar.google.com&amp;color=%23125A12&amp;ctz=America%2FNew_York')
        .success(function (data) {
            mydata = data;
            console.log(data);
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });
        vm.test = mydata;
        vm.title = 'Calednar';
       
        activate();
        
        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('You are now at Calendar page'); });
        }
    }
})();