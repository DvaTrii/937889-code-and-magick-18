'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  // показали область настройки - убрали класс hidden
  // var userDialog = document.querySelector('.setup');
  // открываем и закрываем блок setup по клику
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.utils.userDialog.querySelector('.setup-close');
  var userIcon = document.querySelector('.setup-open-icon');
  var userNameInput = window.utils.userDialog.querySelector('.setup-user-name');
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && document.activeElement !== userNameInput) {
      closePopup();
    }
  };

  userNameInput.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      evt.preventDefault();
    }
  });

  var openPopup = function () {
    window.utils.userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.utils.userDialog.classList.add('hidden');
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
})();
