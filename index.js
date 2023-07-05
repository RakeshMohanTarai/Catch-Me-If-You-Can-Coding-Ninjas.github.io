window.addEventListener('DOMContentLoaded', function() {
  var box = document.getElementById('box');
  var container = document.querySelector('.container');
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;

  function setBoxSize() {
    var boxSize = Math.min(viewportWidth, viewportHeight) * 0.2;
    box.style.width = boxSize + 'px';
    box.style.height = boxSize + 'px';
  }

  function getRandomPosition() {
    var maxX = viewportWidth - parseInt(box.style.width);
    var maxY = viewportHeight - parseInt(box.style.height);
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
    return { x: randomX, y: randomY };
  }

  function setRandomPosition() {
    var position = getRandomPosition();
    box.style.left = position.x + 'px';
    box.style.top = position.y + 'px';
  }

  setBoxSize();
  setRandomPosition();

  window.addEventListener('resize', function() {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    setBoxSize();
  });

  box.addEventListener('mouseenter', function() {
    setRandomPosition();
  });
});