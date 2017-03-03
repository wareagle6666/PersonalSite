(function () {
    'use strict';
    var controllerId = 'work';
    angular.module('app').controller(controllerId, ['common', work]);

    function work(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Work History';
        vm.roleResponsilbity = 'Responsability:'

        vm.veolia = 'SourceOne, Inc (DE)';
        vm.veoliaDate = 'Nov 2015 - Present';
        vm.veoliaTitle = 'Lead Software Developer';
        vm.veoliaList = ['Lead Software Developer ASP.NET / SPA Software Engineer',
        'Managing an offshore team consist of 9 developers and 2 on shore developers',
        'Created a workflow for the team with a new architect to the system',
        'Created a Web-Farm for the application with high accessibility for our customer',
        'Build an entire server for our Offshore team with VM’s to accommodate their work flow',
        'Trained the team on Angular 2.0 and .Net Core',
        'Daily code review for Backend and Sql Code',
        'Maintain and Control servers'];

        vm.veoliaDate2 = 'Jan 2015 - Nov 2015';
        vm.veoliaTitle2 = 'Senior Software Developer';
        vm.veolia2List = ['Senior Software Developer ASP.NET / SPA Software Engineer',
        'Transferred MVC to MVVM with DurandalJS',
        'Rebuild an entire backend to become a restful API to support the SPA application',
        'Built databases and table structures following n-tier architecture methodology using MySql',
        'Moved the team to a new branching methods (GitFlow) for a better working flow',
        'Created a mailing system for the company to send out email on a daily bases or for activity tracking'];

        vm.stmary = 'St Mary & St.George Church';
        vm.stmaryDate = 'Nov 2015 - Present';
        vm.stmaryTitle = 'Lead Software Developer';
        vm.stmaryList = ['Create and maintain items in SQL databases',
        'Develop new features for an existing ASP.NET Win Forms application',
        'Create APIs for the system to sync with google calendar and get responses from text',
        'Create and manitain web applications using VB.NET',
        'Developed a patient management system using ASP.NET MVC & C#',
        'Designed an interactive user interface using HTML, CSS, and JQuery'];

        vm.srs = 'Savannah River Nuclear Site';
        vm.srs = 'Sep 2014 - Jan 2015';
        vm.srsTitle = 'IT Software Engineer';
        vm.srsList = ['Software Engineer ASP.NET / SPA',
        'Transfer old technology applications into new technology',
        'Web developed and Integrating ASP.NET Single Page Application in new application using MVC, HTML5, Bootstrap CSS, JavaScript, AngularJS, Breeze, API, jQuery',
        'Built databases and table structures following n-tier architecture methodology for web applications using MySql, Oracle',
        'Identify and analyze the old software bugs and issues and fix in new design',
        'Assist with any system issues and solve problems',
        'Help and assist with the knowledge of AngularJS and DurandalJS technology',
        'Maintain Report Database on a daily bases',
        'Create Documentation for software',
        'Create Wireframes for new Software using Pencil Project, Visio',
        'Create Test cases and Test software to reveal bugs',
        'Integrate Mobile Technology using JavaScript, CSS, jQury'];

        vm.augusta = 'Georgia Regents University';
        vm.augustaDate = 'Aug 2013 - Sep 2014'
        vm.augustaTitle = 'IT Tech / Developer'
        vm.augustaList = ['Web Developed 4 websites using HTML5, CSS, JavaScript, ASP.NET, and PHP, jQuery',
        'Drafted comprehensive reports to document bugs and design flaws',
        'Identified and suggested new technologies and tools for enhancing product value and increasing team productivity',
        'Built databases and table structures following n-tier architecture methodology for web applications',
        'Train Student on using new technology',
        'Design software for special needs students',
        'Design Desktop applications using Windows Form, C#, Sql',
        'Maintain and Upgrade 30 Desktop for testing',
        'Network Admin'];

        vm.augustine = 'St Augustine Church';
        vm.augustineDate = 'May 2011 - Jan 2015';
        vm.augustineTitle = 'Senior Software Developer';
        vm.augustineList = ['Create and maintain items in SQL databases',
        'Develop new features for an existing ASP.NET Win Forms application',
        'Create APIs for the system to sync with google calendar and get responses from text',
        'Create and manitain web applications using VB.NET',
        'Developed a patient management system using ASP.NET MVC & C#',
        'Designed an interactive user interface using HTML, CSS, and JQuery'];

        vm.micheal = 'Archangel Michael Church';
        vm.michealDate = 'May 2011 - Jan 2015';
        vm.michealTitle = 'Lead Software Developer';
        vm.michealList = ['Create and maintain items in SQL databases',
        'Develop new features for an existing ASP.NET Win Forms application',
        'Create APIs for the system to sync with google calendar and get responses from text',
        'Create and manitain web applications using VB.NET',
        'Developed a patient management system using ASP.NET MVC & C#',
        'Designed an interactive user interface using HTML, CSS, and JQuery'];

        vm.army = 'United States Army';
        vm.armyDate = 'Nov 2015 - Present';
        vm.armyTitle = 'Platoon Sergeant';
        vm.armyList = ['In charge of 32 Soldiers and to Keep track of all paper work of the 32 Soldiers and have them ready for war',
        'Drafted military and nonmilitary correspondence',
        'Supervised the creation and validation of anti-terrorism plans on all ships',
        'Developed and led training programs in preparation for combat',
        'Recommended retransmission equipment employment based on capabilities of the equipment and the mission requirements',
        'Supervised teams in support of security and installation law and order operations',
        'Reviewed disciplinary and other adverse actions and made recommendations',
        'Operated and maintained field communications equipment',
        'Established and commanded field communication operations', ];


        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Work Experiance View'); });
        }
    }
})();