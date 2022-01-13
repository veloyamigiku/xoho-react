import classes from './ImaxInfoImage.module.css';

const ImaxInfoImage = function (props) {
  
  return (
    <div className={classes.ImaxInfoImageWrap}>
    <div className={classes.ImaxInfoImage}>
      <div className={classes.ImaxInfoImageTitleWrap}>
        <img
          className="ImaxInfoImageTitle"
          src={props.data.titleImgUrl}
          alt="ImaxInfoImageTitle" />
      </div>
      <div className={classes.ImaxInfoImageSubTitleWrap}>
        <img
          className="ImaxInfoImageSubTitle"
          src={props.data.subTitleImgUrl}
          alt="ImaxInfoImageSubTitle" />
      </div>
      <div className={classes.ImaxInfoImageImgWrap}>
        <img
          className="ImaxInfoImageImg"
          src={props.data.imgUrl}
          alt="ImaxInfoImageImg" />
      </div>
      <div className={classes.ImaxInfoImageTextWrap}>
        <img
          className="ImaxInfoImageText"
          src={props.data.textImgUrl}
          alt="ImaxInfoImageText" />
      </div>
    </div>
    </div>
  );

}

export default ImaxInfoImage;
