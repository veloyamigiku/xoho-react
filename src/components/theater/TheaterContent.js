import classes from './TheaterContent.module.css';
import TheaterPrefecture from './TheaterPrefecture';

const TheaterContent = function(props) {
  var prefectureList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (prefecture, prefectureIdx) {
      prefectureList.push(
        <TheaterPrefecture
          data={prefecture}
          key={'TheaterPrefecture' + prefectureIdx} />
      );
    });
  }
  return (
    <div className={classes.TheaterContent}>
      {prefectureList}
    </div>
  );
}

export default TheaterContent;
