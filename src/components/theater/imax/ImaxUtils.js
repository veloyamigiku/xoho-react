export const getTheater = function (theaterData) {
  var theaterList = [];
  theaterData.prefecture.forEach(function (prefecture) {
    prefecture.theater.forEach(function (theater) {
      theaterList.push(theater);
    });
  });
  return theaterList;
}
