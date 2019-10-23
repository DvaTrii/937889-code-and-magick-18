'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
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
    window.utils.userDialog.removeAttribute('style');
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

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

  var form = window.utils.userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      window.utils.userDialog.classList.add('hidden');
    });
    evt.preventDefault();
  });

})();
