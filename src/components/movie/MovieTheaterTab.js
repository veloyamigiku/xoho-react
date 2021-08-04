const MovieTheaterTab = (props) => {
  
  var movieTheaterTabItemList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (theaterByAreaPrefecture, theaterByAreaPrefectureIdx) {
      movieTheaterTabItemList.push(
        <div
          className="MovieTheaterTabItem"
          key={'MovieTheaterTabItem' + theaterByAreaPrefectureIdx}>
          {theaterByAreaPrefecture.area.name}
        </div>
      );
    });
  }

  return (
    <div>
      {movieTheaterTabItemList}
    </div>
  );
  
}

export default MovieTheaterTab;
