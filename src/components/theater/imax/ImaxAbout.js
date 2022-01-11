import ImaxInfoText from './ImaxInfoText';
import ImaxInfoImage from './ImaxInfoImage';

const ImaxAbout = function (props) {

  const imaxInfoList = [];
  if (props.data.info && props.data.info.length > 0) {
    props.data.info.forEach(function (info, infoIdx) {
      switch (info.type) {
        case 'text':
          imaxInfoList.push(
            <ImaxInfoText
              data={info}
              key={'ImaxInfoText' + infoIdx} />
          );
          break;
        case 'image':
          imaxInfoList.push(
            <ImaxInfoImage
              data={info}
              key={'ImaxInfoImage' + infoIdx} />
          );
          break;
      }
    });
  }
  return (
    <div>
      <div>
        <img
          className="ImaxAboutTitleImg"
          src={props.data.titleImgUrl}
          alt="ImaxAboutTitleImg" />
      </div>
      {props.data.imgUrl &&
      <div>
        <img
          className="ImaxAboutImg"
          src={props.data.imgUrl}
          alt="ImaxAboutImg" />
      </div>
      }
      <div>
        <img
          className="ImaxAboutTextImg"
          src={props.data.textImgUrl}
          alt="ImaxAboutTextImg" />
      </div>
      <div>
        {imaxInfoList}
      </div>
    </div>
  );

};

export default ImaxAbout;
