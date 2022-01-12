import ImaxInfoText from './ImaxInfoText';
import ImaxInfoImage from './ImaxInfoImage';
import classes from './ImaxAbout.module.css';

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
        default:
          break;
      }
    });
  }

  return (
    <div className={classes.ImaxAbout}>
      <div
        className={classes.ImaxAboutTitle}
        style={{
          background: 'url(' + props.data.titleBgImgUrl + ') repeat center',
        }}>
        <img
          className='ImaxAboutTitleImg'
          src={props.data.titleImgUrl}
          alt='ImaxAboutTitleImg' />
      </div>
      {props.data.imgUrl &&
      <div>
        <img
          className={classes.ImaxAboutImg}
          src={props.data.imgUrl}
          alt='ImaxAboutImg' />
      </div>
      }
      <div
        className={classes.ImaxAboutText}
        style={{
          background: 'url(' + props.data.textBgImgUrl + ') repeat center',
        }}>
        <img
          className='ImaxAboutTextImg'
          src={props.data.textImgUrl}
          alt='ImaxAboutTextImg' />
      </div>
      <div>
        {imaxInfoList}
      </div>
    </div>
  );

};

export default ImaxAbout;
