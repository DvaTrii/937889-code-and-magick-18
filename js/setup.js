'use strict';

// магические кнопки esc enter
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// показали область настройки - убрали класс hidden
var userDialog = document.querySelector('.setup');

// открываем и закрываем блок setup по клику
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var userIcon = document.querySelector('.setup-open-icon');
var userNameInput = userDialog.querySelector('.setup-user-name');

// выбираем элементы вылшебника для измененеия цвета по клику
var setUpWizard = userDialog.querySelector('.setup-player');
var setUpCoat = setUpWizard.querySelector('.wizard-coat');
var setUpEyes = setUpWizard.querySelector('.wizard-eyes');
var setUpFireBall = setUpWizard.querySelector('.setup-fireball-wrap');

// ========================= обработка открытия закрытия окна настроек ===========================================
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && document.activeElement !== userNameInput) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

// и по нажатию enter на иконке пользователя
userIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// проверим вводимые данные на ошибки
// обработаем событие invalid - некорректное заполнение формы
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity(''); // сбросить значение поля, если это значение стало корректно
  }
});

// ========================= отрисовка похожих персонажей ===========================================

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

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

// генерируем случайные номер элемента в массиве
var getRandomNumber = function (arryaName) {
  return Math.floor(Math.random() * arryaName.length);
};

// наполняем его волшебниками
// создает массив волшебников
var getWizards = function (amount) {
  // создаем пустой массив
  var wizards = [];
  for (var j = 0; j < amount; j++) {
    // пушим в него значения
    wizards.push({
      name: WIZARD_NAMES[getRandomNumber(WIZARD_NAMES)],
      lastName: WIZARD_LASTNAMES[getRandomNumber(WIZARD_LASTNAMES)],
      coatColor: WIZARD_COATCOLORS[getRandomNumber(WIZARD_COATCOLORS)],
      eyesColor: WIZARD_EYESCOLORS[getRandomNumber(WIZARD_EYESCOLORS)]
    });
  }
  return wizards;
};

// заполним 4мя персонажами (разметкой div(temp)) нужный нам div(ins)
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.lastName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
var wizardsData = getWizards(4);
for (var i = 0; i < getWizards(4).length; i++) {
  fragment.appendChild(renderWizard(wizardsData[i]));
}

similarListElement.appendChild(fragment);

// ========================= обработка изменения цвета элементов волшебника ===========================================

setUpCoat.addEventListener('click', function () {
  setUpCoat.style.fill = WIZARD_COATCOLORS[getRandomNumber(WIZARD_COATCOLORS)];
});

setUpEyes.addEventListener('click', function () {
  setUpEyes.style.fill = WIZARD_EYESCOLORS[getRandomNumber(WIZARD_EYESCOLORS)];
});

setUpFireBall.addEventListener('click', function () {
  setUpFireBall.style.backgroundColor = FIREBALL_COLORS[getRandomNumber(FIREBALL_COLORS)];
});

