import ImaxTheater from "./ImaxTheater";
import { getTheaters } from "./ImaxUtils";

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

  return (
    <div>
      <ImaxTheater data={imaxLaserTheaterData} />
      <ImaxTheater data={imaxDigitalTheaterData} />
    </div>
  );
  
};

export default ImaxContent;
