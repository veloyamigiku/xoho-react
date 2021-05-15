import { useState } from 'react/cjs/react.development';
import classes from './LoginMenuButton.module.css';

const LoginMenuButton = function (props) {
  const [isHover, setHoverState] = useState(false);

  const loginMenuButttonStyle = {
    backgroundColor: isHover ? props.data.backgroundColorHover : props.data.backgroundColor,
    transition: 'background .3s'
  };

  const loginMenuButtonAStyle = {
    color: isHover ? props.data.colorHover : props.data.color,
    transition: 'color .3s'
  }

  const onMouseOver = function () {
    setHoverState(true);
  }

  const onMouseOut = function () {
    setHoverState(false);
  }

  return (
    <div
      className={classes.LoginMenuButton}
      style={loginMenuButttonStyle}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}>
      <a
        className={classes.LoginMenuButtonA}
        style={loginMenuButtonAStyle}
        href={props.data.url}>
        <div>{props.data.label}</div>
      </a>
    </div>
  );
}

export default LoginMenuButton;
