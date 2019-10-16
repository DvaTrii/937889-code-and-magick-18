'use strict';
(function () {
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var setUpWizard = window.utils.userDialog.querySelector('.setup-player');
  var setUpCoat = setUpWizard.querySelector('.wizard-coat');
  var setUpEyes = setUpWizard.querySelector('.wizard-eyes');
  var setUpFireBall = setUpWizard.querySelector('.setup-fireball-wrap');

  setUpCoat.addEventListener('click', function () {
    setUpCoat.style.fill = window.generateMock.WIZARD_COATCOLORS[window.utils.getRandomNumber(window.generateMock.WIZARD_COATCOLORS)];
  });

  setUpEyes.addEventListener('click', function () {
    setUpEyes.style.fill = window.generateMock.WIZARD_EYESCOLORS[window.utils.getRandomNumber(window.generateMock.WIZARD_EYESCOLORS)];
  });

  setUpFireBall.addEventListener('click', function () {
    setUpFireBall.style.backgroundColor = FIREBALL_COLORS[window.utils.getRandomNumber(FIREBALL_COLORS)];
  });
})();

