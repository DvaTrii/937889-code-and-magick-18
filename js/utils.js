'use strict';
(function () {
  window.utils = {
    userDialog: document.querySelector('.setup'),
    getRandomNumber: function (arryaName) {
      return Math.floor(Math.random() * arryaName.length);
    }
  };
})();
