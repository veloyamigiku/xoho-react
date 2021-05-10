import classes from './MenuItemB.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItemB = function(props) {
  return (
    <div className={classes.MenuItemB}>
      <a className={classes.MenuItemBLink} href={props.data.url}>
        <div><FontAwesomeIcon className={classes.MenuItemBIcon} icon={props.data.icon} /></div>
        <div className={classes.MenuItemBLabel} dangerouslySetInnerHTML={{__html: props.data.label}} />
      </a>
    </div>
  );
}

export default MenuItemB;
