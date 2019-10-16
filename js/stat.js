'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 125;
  var CLOUD_Y_TEXT = 250;
  var CLOUD_Y_BAR = 245;
  var GAP = 50;
  var BAR_WIDTH = 40;
  var TOTAL_GAP = BAR_WIDTH + GAP;
  var BAR_HEIGHT = 150;
  var CLOUD_Y_SCORE = 70;

  // рисует облако для выведения результатов
  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };
  // пишет текст
  var renderText = function (ctx, text, x, y) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'black';
    ctx.textBaseline = 'hanging';
    ctx.fillText(text, x, y);
  };
  // рисует столбцы результов
  var renderBar = function (ctx, color, x, y, w, h) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  };
  // ищет максимальный элемент в массиве
  var getMaxElement = function (arr) {
    if (arr.length > 0) {
      var maxElement = arr[0];

      for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
    }
    return maxElement;
  };

  window.renderStatistics = function (ctx, players, times) {
    // рисуем тень
    renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
    // рисуем облако
    renderCloud(ctx, 100, 10, '#fff');
    // пишем текст приветствия
    renderText(ctx, 'Ура вы победили!', CLOUD_X, 30);
    renderText(ctx, 'Список результатов:', CLOUD_X, 50);
    // render player's name
    var maxTime = getMaxElement(times);
    for (var i = 0; i < players.length; i++) {
      if (players[i] === 'Вы') {
        // рисуем красным столбец игрока (Вы)
        renderBar(ctx, 'rgba(255, 0, 0, 1)', CLOUD_X + TOTAL_GAP * i, CLOUD_Y_BAR, BAR_WIDTH, -BAR_HEIGHT * Math.round(times[i]) / Math.round(maxTime));
      } else {
        // рисуем столбцы остальных игроков
        renderBar(ctx, 'hsl(240, ' + Math.round(Math.random() * 100) + '%, 50%)', CLOUD_X + TOTAL_GAP * i, CLOUD_Y_BAR, BAR_WIDTH, -BAR_HEIGHT * Math.round(times[i]) / Math.round(maxTime));
      }
      // пишем имена игроков снизу
      renderText(ctx, players[i], CLOUD_X + TOTAL_GAP * i, CLOUD_Y_TEXT);
      // пишем результаты сверху
      renderText(ctx, Math.floor(times[i]), CLOUD_X + TOTAL_GAP * i, CLOUD_Y_SCORE + BAR_HEIGHT - (BAR_HEIGHT * Math.round(times[i]) / Math.round(maxTime)));
    }
  };
})();

