import classes from './LargeButton.module.css';

const LargeButton = function(props) {

  return (
    <div className={classes.LargeButton}>
      <a className={classes.LargeButtonLink} href={props.data.url}>
        <div className={classes.LargeButtonTitle}>{props.data.title}</div>
      </a>
    </div>
  );

}

export default LargeButton;
