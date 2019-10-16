'use strict';
(function () {
  var WIZARD_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var WIZARD_LASTNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  window.generateMock = {
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
    getWizards: function (amount) {
      var wizards = [];
      for (var j = 0; j < amount; j++) {
        wizards.push({
          name: WIZARD_NAMES[window.utils.getRandomNumber(WIZARD_NAMES)],
          lastName: WIZARD_LASTNAMES[window.utils.getRandomNumber(WIZARD_LASTNAMES)],
          coatColor: window.generateMock.WIZARD_COATCOLORS[window.utils.getRandomNumber(window.generateMock.WIZARD_COATCOLORS)],
          eyesColor: window.generateMock.WIZARD_EYESCOLORS[window.utils.getRandomNumber(window.generateMock.WIZARD_EYESCOLORS)]
        });
      }
      return wizards;
    }
  };
})();
