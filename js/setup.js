'use strict';
// показали область настройки - убрали класс hidden
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// покажем блок с похожими персонажами
document.querySelector('.setup-similar').classList.remove('hidden');

// выберем div (ins) куда будем вставлять список похожих персонажей
var similarListElement = document.querySelector('.setup-similar-list');

// выберем шаблон тег template и запишем div (tem) с разметкой с переменную
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

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

// генерируем случайные номер элемента в массиве
var getRandomNumber = function (arryaName) {
  var number = Math.floor(Math.random() * arryaName.length);
  return number;
};

// создаем пустой массив
var wizards = [];

// наполняем его волшебниками
for (var j = 0; j < 4; j++) {
  wizards.push({
    name: WIZARD_NAMES[getRandomNumber(WIZARD_NAMES)],
    lastName: WIZARD_LASTNAMES[getRandomNumber(WIZARD_LASTNAMES)],
    coatColor: WIZARD_COATCOLORS[getRandomNumber(WIZARD_COATCOLORS)],
    eyesColor: WIZARD_EYESCOLORS[getRandomNumber(WIZARD_EYESCOLORS)]
  });
}

// заполним 4мя персонажами (разметкой div(temp)) нужный нам div(ins)

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.lastName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);


