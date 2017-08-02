import angular from 'angular';
import moment from 'moment';

angular
  .module('calendar', [])
  .controller("CalendarController", CalendarController)

function CalendarController () {
  var vm = this;

  vm.today = moment();
  vm.calendar = calendrical.getWeeksInMonth(new Date(vm.today));
};
