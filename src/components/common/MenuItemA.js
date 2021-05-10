import classes from './MenuItemA.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItemA = function(props) {
  return (
    <div className="MenuItemA">
      <a className={classes.MenuItemALink} href={props.data.url}>
        <div><FontAwesomeIcon className={classes.MenuItemAIcon} icon={props.data.icon} /></div>
        <div>{props.data.label}</div>
      </a>
    </div>
  );
}

export default MenuItemA;
