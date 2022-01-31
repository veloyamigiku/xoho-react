import ImaxTheater from './ImaxTheater';
import { getTheaters } from './ImaxUtils';
import classes from './ImaxContent.module.css';
import ImaxAbout from './ImaxAbout';
import ImaxMovie from './ImaxMovie';
import { ranking } from '../../top/ranking/RankingData';

const ImaxContent = function (props) {
  
  const imaxLaserTheaterData = {
    imaxType: 6,
    introImgUrl: props.data.topData.lasertIntroImgUrl,
    theater: getTheaters(props.data.theaterData[6]),
    theaterAbout: {
      title: 'IMAX®レーザーとは'
    }
  };

  const imaxDigitalTheaterData = {
    imaxType: 1,
    introImgUrl: props.data.topData.introImgUrl,
    theater: getTheaters(props.data.theaterData[1]),
    theaterAbout: {
      title: 'IMAX®とは'
    }
  }

  const imaxLaserAboutData = props.data.topData.laser;

  const imaxDigitalAboutData = props.data.topData.imax;

  return (
    <div className={classes.ImaxContent}>
      <ImaxTheater data={imaxLaserTheaterData} />
      <ImaxTheater data={imaxDigitalTheaterData} />
      <ImaxMovie data={ranking} />
      <ImaxAbout data={imaxLaserAboutData} />
      <ImaxAbout data={imaxDigitalAboutData} />
    </div>
  );
  
};

export default ImaxContent;
