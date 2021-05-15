import classes from './LoginMenu.module.css';
import LoginMenuButton from './LoginMenuButton';

const LoginMenu = function(props) {

  var loginMenuButtonList = [];
  if (props.data.button && props.data.button.length > 0) {
    props.data.button.forEach(function (loginMenuButton, loginMenuButtonIdx) {
      loginMenuButtonList.push(
        <LoginMenuButton
          data={loginMenuButton}
          key={'LoginMenuButton' + loginMenuButtonIdx} />
      );
    });
  }
  var loginMenuLink = null;
  if (props.data.link) {
    loginMenuLink = <div>
      <a className={classes.LoginMenuLink} href={props.data.link.url}>{props.data.link.label}</a>
    </div>;
  }
  return (
    <div className={classes.LoginMenu}>
      {loginMenuButtonList}
      <div>
        {loginMenuLink}
      </div>
    </div>
  );
}

export default LoginMenu;
