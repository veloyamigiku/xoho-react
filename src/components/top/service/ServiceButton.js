import classes from './ServiceButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react/cjs/react.development';

const ServiceButton = function (props) {

  const [isHover, setIsHover] = useState(false);

  var icon = <div></div>;
  if (props.data.icon) {
    icon = <div>
      <FontAwesomeIcon
        icon={props.data.icon}
        className={classes.ServiceButtonIcon}
        style={{
          color: isHover ? '#fff' : props.data.titleColor
        }} />
    </div>
  }

  return (
    <div
      className={classes.ServiceButton}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}>
      <a
        className={classes.ServiceButtonLink}
        href={props.data.url}>
        <div className={classes.ServiceButtonContent}>
          <div>{icon}</div>
          <div
            className={classes.ServiceButtonTitle}
            style={{color: isHover ? '#fff' : props.data.titleColor}}>{props.data.title}</div>
        </div>
      </a>
    </div>
  );
}

export default ServiceButton;
