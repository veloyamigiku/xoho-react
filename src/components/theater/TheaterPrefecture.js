import classes from './TheaterPrefecture.module.css';
import Theater from './Theater';

const TheaterPrefecture = function(props) {

  var theaterList = [];
  if (props.data.theater && props.data.theater.length > 0) {
    props.data.theater.forEach(function (theater, theaterIdx) {
      theaterList.push(
        <Theater
          data={theater}
          key={'Theater' + theaterIdx} />
      );
    });
  }
  return (
    <div className={classes.TheaterPrefecture}>
      <div className={classes.TheaterPrefectureName}>{props.data.name}</div>
      <div className={classes.TheaterPrefectureSub}>{props.data.sub}</div>
      <div>
        {theaterList}
      </div>
    </div>
  );
}

export default TheaterPrefecture;
