// go to instagram.com
/// wait for article
// find closest article
// console.log closest h2

var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.instagram.com/')
  .wait('article')
  .evaluate(() => {
    var nameNodes = document.querySelectorAll('h2');
    var list = [].slice.call(nameNodes);
    return list.map(function(node){
      return node.innerText
    });
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });