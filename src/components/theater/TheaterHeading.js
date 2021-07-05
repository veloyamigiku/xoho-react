import classes from './TheaterHeading.module.css';

const TheaterHeading = function(props) {
  return (
    <div className={classes.TheaterHeading}>
      <div className={classes.TheaterHeadingTitle}>{props.data.title}</div>
      <div className={classes.TheaterHeadingSub}>{props.data.sub}</div>
    </div>
  );
}

export default TheaterHeading;
