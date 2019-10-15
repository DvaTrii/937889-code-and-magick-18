'use strict';
(function () {
  var setUpWizard = window.utils.userDialog.querySelector('.setup-player');
  var setUpCoat = setUpWizard.querySelector('.wizard-coat');
  var setUpEyes = setUpWizard.querySelector('.wizard-eyes');
  var setUpFireBall = setUpWizard.querySelector('.setup-fireball-wrap');

  setUpCoat.addEventListener('click', function () {
    setUpCoat.style.fill = window.utils.WIZARD_COATCOLORS[window.utils.getRandomNumber(window.utils.WIZARD_COATCOLORS)];
  });

  setUpEyes.addEventListener('click', function () {
    setUpEyes.style.fill = window.utils.WIZARD_EYESCOLORS[window.utils.getRandomNumber(window.utils.WIZARD_EYESCOLORS)];
  });

  setUpFireBall.addEventListener('click', function () {
    setUpFireBall.style.backgroundColor = window.utils.FIREBALL_COLORS[window.utils.getRandomNumber(window.utils.FIREBALL_COLORS)];
  });
})();

// ========================= обработка изменения цвета элементов волшебника setup.js ===========================================
// выбираем элементы вылшебника для измененеия цвета по клику
