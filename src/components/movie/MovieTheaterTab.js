import classes from './MovieTheaterTab.module.css';

const MovieTheaterTab = (props) => {
  
  var movieTheaterTabItemList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (theaterByAreaPrefecture, theaterByAreaPrefectureIdx) {
      movieTheaterTabItemList.push(
        <div
          className={classes.MovieTheaterTabItem}
          key={'MovieTheaterTabItem' + theaterByAreaPrefectureIdx}>
          {theaterByAreaPrefecture.area.name}
        </div>
      );
    });
  }

  return (
    <div className={classes.MovieTheaterTab}>
      {movieTheaterTabItemList}
    </div>
  );

}

export default MovieTheaterTab;
