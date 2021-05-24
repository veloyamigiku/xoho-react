import classes from './ImportantInformationItem.module.css';

const ImportantInformationItem = function(props) {
  return (
    <div className={classes.ImportantInformationItem}>
      <a
        className={classes.ImportantInformationItemLink}
        href={props.data.url}>{props.data.label}</a>
    </div>
  );
}

export default ImportantInformationItem;
