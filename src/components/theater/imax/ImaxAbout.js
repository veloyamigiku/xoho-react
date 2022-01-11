const ImaxAbout = function (props) {

  return (
    <div>
      <div>
        <img
          className="ImaxAboutTitleImg"
          src={props.data.titleImgUrl}
          alt="ImaxAboutTitleImg" />
      </div>
      <div>
        <img
          className="ImaxAboutImg"
          src={props.data.imgUrl}
          alt="ImaxAboutImg" />
      </div>
      <div>
        <img
          className="ImaxAboutTextImg"
          src={props.data.textImgUrl}
          alt="ImaxAboutTextImg" />
      </div>
    </div>
  );

};

export default ImaxAbout;
