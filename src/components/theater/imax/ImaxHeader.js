import classes from './ImaxHeader.module.css';

const ImaxHeader = function (props) {

  return (
    <div className={classes.ImaxHeader}>
      <div className={classes.ImaxHeaderLogo}>
        <div className={classes.ImaxHeaderLogoInner}>
          <img className={classes.ImaxHeaderLogo} src={props.data.logo} alt="ImaxHeaderLogo" />
        </div>
      </div>
      <div>
        <img className={classes.ImaxHeaderTitleImg} src={props.data.titleImgUrl} alt="ImaxHeaderTitleImg" />
      </div>
    </div>
  );

}

export default ImaxHeader;
