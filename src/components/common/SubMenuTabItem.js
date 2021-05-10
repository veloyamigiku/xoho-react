import classes from './SubMenuTabItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SubMenuTabItem = function(props) {
  return (
    <div
      className={classes.SubMenuTabItem}
      data-active={props.active ? 1 : 0}
      onClick={() => props.click()}>
      <div><FontAwesomeIcon className={classes.SubMenuTabItemIcon} icon={props.data.icon} /></div>
      <div className={classes.SubMenuTabItemLabel} dangerouslySetInnerHTML={{__html: props.data.label}} />
    </div>
  );
}

export default SubMenuTabItem;