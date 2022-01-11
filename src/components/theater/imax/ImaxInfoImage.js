const ImaxInfoImage = function (props) {
  
  return (
    <div>
      <div>
        <img
          className="ImaxInfoImageTitle"
          src={props.data.titleImgUrl}
          alt="ImaxInfoImageTitle" />
      </div>
      <div>
        <img
          className="ImaxInfoImageSubTitle"
          src={props.data.subTitleImgUrl}
          alt="ImaxInfoImageSubTitle" />
      </div>
      <div>
        <img
          className="ImaxInfoImageImg"
          src={props.data.imgUrl}
          alt="ImaxInfoImageImg" />
      </div>
      <div>
        <img
          className="ImaxInfoImageText"
          src={props.data.textImgUrl}
          alt="ImaxInfoImageText" />
      </div>
    </div>
  );

}

export default ImaxInfoImage;
