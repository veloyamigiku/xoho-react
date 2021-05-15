import classes from './Heading.module.css';

const Heading = function(props) {
  return (
    <div className={classes.Heading}>
      <div className={classes.HeadingTitle}>{props.data.title}</div>
      <div className={classes.HeadingSub}>{props.data.sub}</div>
    </div>
  );
}

export default Heading;
