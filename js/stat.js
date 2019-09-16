'use strict';

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


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, x, y);
};

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
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + TOTAL_GAP * i, CLOUD_Y_BAR, BAR_WIDTH, -BAR_HEIGHT * Math.round(times[i]) / Math.round(maxTime));
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.round(Math.random() * 100) + '%, 50%)';
      ctx.fillRect(CLOUD_X + TOTAL_GAP * i, CLOUD_Y_BAR, BAR_WIDTH, -BAR_HEIGHT * Math.round(times[i]) / Math.round(maxTime));
    }
    ctx.fillStyle = 'black';
    ctx.fillText(players[i], CLOUD_X + TOTAL_GAP * i, CLOUD_Y_TEXT);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + TOTAL_GAP * i, CLOUD_Y_SCORE + BAR_HEIGHT - (BAR_HEIGHT * Math.round(times[i]) / Math.round(maxTime)));
  }
};
