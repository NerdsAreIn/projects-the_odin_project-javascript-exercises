const getTheTitles = function(books) {
  let titles = [];
  for (let i = 0; i < books.length; ++i) {
     titles[i] = books[i].title;
  }
  return titles;
}
module.exports = getTheTitles;
