'use strict'

/**
 * @ngdoc overview
 * @name dareornotApp
 * @description
 * # dareornotApp
 *
 * Main module of the application.
 */
angular
  .module('dareornotApp', [
    'ui.bootstrap',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMap',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl',
        controllerAs: 'calendar'
      })
      .when('/categories', {
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl',
        controllerAs: 'categories'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contacts'
      })
      .when('/friends', {
        templateUrl: 'views/friends.html',
        controller: 'FriendsCtrl',
        controllerAs: 'friends'
      })
      .when('/landing', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl',
        controllerAs: 'landing'
      })
      .when('/мап', {
        templateUrl: 'views/мап.html',
        controller: 'Ctrl',
        controllerAs: 'мап'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        controllerAs: 'map'
      })
      .when('/messages', {
        templateUrl: 'views/messages.html',
        controller: 'MessagesCtrl',
        controllerAs: 'messages'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl',
        controllerAs: 'news'
      })
      .when('/profile-statistics', {
        templateUrl: 'views/profile-statistics.html',
        controller: 'ProfileStatisticsCtrl',
        controllerAs: 'profileStatistics'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/single-dare', {
        templateUrl: 'views/single-dare.html',
        controller: 'SingleDareCtrl',
        controllerAs: 'singleDare'
      })
      .when('/start-new-dare', {
        templateUrl: 'views/start-new-dare.html',
        controller: 'StartNewDareCtrl',
        controllerAs: 'startNewDare'
      })
      .when('/timeline', {
        templateUrl: 'views/timeline.html',
        controller: 'TimelineCtrl',
        controllerAs: 'timeline'
      })
      .when('/administration', {
        templateUrl: 'views/administration.html',
        controller: 'AdministrationCtrl',
        controllerAs: 'administration'
      })
      .otherwise({
        redirectTo: '/'
      })
  })
