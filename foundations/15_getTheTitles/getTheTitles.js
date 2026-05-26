const getTheTitles = function (booksArray) {
  const titles = booksArray.map((book) => {
    return book.title;
  });
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
