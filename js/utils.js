'use strict';
(function () {
  window.utils = {
    WIZARD_EYESCOLORS: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ],
    WIZARD_COATCOLORS: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],
    FIREBALL_COLORS: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ],
    userDialog: document.querySelector('.setup'),
    getRandomNumber: function (arryaName) {
      return Math.floor(Math.random() * arryaName.length);
    }
  };
})();
