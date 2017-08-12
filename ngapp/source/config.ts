function config(locationProvider, stateProvider, urlRouterProvider) {
    locationProvider.html5Mode(true);
	urlRouterProvider.otherwise('/home');
	 var home = {
            name: 'home',
            url: '/home',
            template: '<home></home>'
      };
	 var calendar = {
            name: 'calendar',
            url: '/calendar',
            template: '<calendar></calendar>'
      };
	 var test = {
            name: 'test',
            url: '/test',
            template:'<test></test>'
      };
	
    stateProvider
   .state(home)
   .state(calendar)
   .state(test)
}

config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
export default config;
