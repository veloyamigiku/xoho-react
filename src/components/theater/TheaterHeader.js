import classes from './TheaterHeader.module.css';

const TheaterHeader = function(props) {
  return (
    <div
      className={classes.TheaterHeader}
      onClick={() => props.click()}>
      <div className={classes.TheaterHeaderTitle}>{props.data.title}</div>
      <div className={classes.TheaterHeaderSub}>{props.data.sub}</div>
      <div className="TheaterHeaderOption">{props.data.option}</div>
    </div>
  );
}

export default TheaterHeader;
