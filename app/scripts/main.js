var mq = matchMedia('(min-width: 400px)');
var pckry;
var pckryGrid = document.querySelector('.grid');
var pckryOptions = {
  itemSelector: '.item',
  gutter: 0
};

if (mq.matches) {
  pckry = new Packery(pckryGrid, pckryOptions);
}

mq.addListener(function(mql) {
  if (mql.matches) {
    pckry = new Packery(pckryGrid, pckryOptions);
  } else {
    pckry.destroy();
  }
});
