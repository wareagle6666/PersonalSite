(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'Home',
                    settings: {
                        nav: 1,
                        content: '<i class="icon-star"></i> Home'
                    }
                }
            }, {
                url: '/education',
                config: {
                    title: 'Education',
                    templateUrl: 'app/education/education.html',
                    settings: {
                        nav: 2,
                        content: '<i class="icon-book"></i> Education'
                    }
                }
            }, {
                url: '/work',
                config: {
                    title: 'Work Experiance',
                    templateUrl: 'app/work/work.html',
                    settings: {
                        nav: 2,
                        content: '<i class="icon-briefcase"></i> Work Experiance'
                    }
                }
            }, {
                url: '/skills',
                config: {
                    title: 'Skills',
                    templateUrl: 'app/skills/skills.html',
                    settings: {
                        nav: 2,
                        content: '<i class="icon-list-alt"></i> Skills'
                    }
                }
            }, {
                url: '/certification',
                config: {
                    title: 'Certification',
                    templateUrl: 'app/certification/certification.html',
                    settings: {
                        nav: 2,
                        content: '<i class="icon-file"></i> Certification'
                    }
                }
            }, {
                url: '/accomplishments',
                config: {
                    title: 'Accomplishments',
                    templateUrl: 'app/accomplishments/accomplishments.html',
                    settings: {
                        nav: 2,
                        content: '<i class="icon-star"></i> Accomplishments'
                    }
                }
            }, {
                url: '/contact',
                config: {
                    title: 'contact',
                    templateUrl: 'app/contact/contact.html',
                    settings: {
                        nav: 2,
                        content: '<i class="icon-envelope"></i> Contact'
                    }
                }
            }

        ];
    }
})();