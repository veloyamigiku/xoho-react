import classes from './ImaxInfoText.module.css';

const ImaxInfoText = function (props) {
  
  return (
    <div className={classes.ImaxInfoText}>
      <div className={classes.ImaxInfoTextHeader}>{props.data.header}</div>
      <div className={classes.ImaxInfoTextBody}>{props.data.body}</div>
    </div>
  );

}

export default ImaxInfoText;
