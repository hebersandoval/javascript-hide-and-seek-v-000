function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div');
}

function increaseRankBy(n) {
  let rank = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML + n);
  }
}
