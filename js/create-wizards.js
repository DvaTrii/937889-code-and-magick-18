'use strict';
(function () {
  document.querySelector('.setup-similar').classList.remove('hidden');

  // выберем div (ins) куда будем вставлять список похожих персонажей
  var similarListElement = document.querySelector('.setup-similar-list');

  // выберем шаблон тег template и запишем div (tem) с разметкой с переменную
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');
  var createWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.lastName;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var wizardsData = window.generateMock.getWizards(4);
  for (var i = 0; i < window.generateMock.getWizards(4).length; i++) {
    similarListElement.appendChild(createWizard(wizardsData[i]));
  }
})();
