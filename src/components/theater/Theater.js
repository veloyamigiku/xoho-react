import classes from './Theater.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Theater = function(props) {
  var typeList = [];
  if (props.data.type && props.data.type.length > 0) {
    props.data.type.forEach(function (type, typeIdx) {
      typeList.push(
        <div
          className={classes.TheaterType}
          key={'TheaterType' + typeIdx}>
          {type.icon && <FontAwesomeIcon className={classes.TheaterTypeIcon} icon={type.icon} />}
          <div className={classes.TheaterTypeName}>{type.name}</div>
        </div>
      );
    });
  }
  return (
    <div className={classes.Theater}>
      <a className={classes.TheaterLink} href={props.data.url}>
        <div className={classes.TheaterName}>TOHOシネマズ {props.data.name}</div>
        <div className={classes.TheaterSub}>TOHO CINEMAS {props.data.sub}</div>
      </a>
      <div className={classes.TheaterTypeGroup}>
        {typeList}
      </div>
    </div>
  )
}

export default Theater;
