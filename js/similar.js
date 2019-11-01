'use strict';
(function () {
  var wizards = [];
  var coatColor;
  var eyesColor;
  var fireBallColor;

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    if (wizard.colorFireball === fireBallColor) {
      rank += 1;
    }

    return rank;
  };
  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.create.create(wizards.slice().
      sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = namesComparator(left.name, right.name);
        }
        return rankDiff;
      }));
  };

  window.wizard.onEyesChange = window.debounce.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.wizard.onCoatChange = window.debounce.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  window.wizard.onFireBallChange = window.debounce.debounce(function (color) {
    fireBallColor = color;
    updateWizards();
  });

  var loadHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(loadHandler, errorHandler);
})();
