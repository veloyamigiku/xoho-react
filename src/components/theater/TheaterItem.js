import classes from './TheaterItem.module.css';
import TheaterHeader from './TheaterHeader';
import TheaterContent from './TheaterContent';

const TheaterItem = function(props) {
  return (
    <div className={classes.TheaterItem}>
      <TheaterHeader data={props.data.header} />
      <TheaterContent data={props.data.prefecture} />
    </div>
  );
}

export default TheaterItem;
