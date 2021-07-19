import classes from './TheaterContainer.module.css';
import TheaterItem from './TheaterItem';

const TheaterContainer = function(props) {

  var theaterItemList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (theaterItem, theaterItemIdx) {
      theaterItemList.push(
        <TheaterItem
          data={theaterItem}
          key={'TheaterItem' + theaterItemIdx} />
      );
    });
  }
  return (
    <div className={classes.TheaterContainer}>{theaterItemList}</div>
  );
}

export default TheaterContainer;
