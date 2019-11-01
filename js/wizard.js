'use strict';
(function () {
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  var WIZARD_EYESCOLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var WIZARD_COATCOLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {},
    onFireBallChange: function () {}
  };

  var setUpWizard = window.utils.userDialog.querySelector('.setup-player');
  var setUpCoat = setUpWizard.querySelector('.wizard-coat');
  var setUpEyes = setUpWizard.querySelector('.wizard-eyes');
  var setUpFireBall = setUpWizard.querySelector('.setup-fireball-wrap');


  setUpCoat.addEventListener('click', function () {
    var newColor = WIZARD_COATCOLORS[window.utils.getRandomNumber(WIZARD_COATCOLORS)];
    setUpCoat.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });
  setUpEyes.addEventListener('click', function () {
    var newColor = WIZARD_EYESCOLORS[window.utils.getRandomNumber(WIZARD_EYESCOLORS)];
    setUpEyes.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });
  setUpFireBall.addEventListener('click', function () {
    var newColor = FIREBALL_COLORS[window.utils.getRandomNumber(FIREBALL_COLORS)];
    setUpFireBall.style.fill = newColor;
    wizard.onFireBallChange(newColor);
  });
  window.wizard = wizard;
  return window.wizard;
})();
