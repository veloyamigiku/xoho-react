import { useEffect, useState } from "react";
import ImaxTheater from "./ImaxTheater";
import { getTheater } from "./ImaxUtils";

const ImaxContent = function (props) {

  const [imaxLaserTheaterData, setImaxLaserTheaterData] = useState({
    introImgUrl: undefined,
    theaterList: []
  });

  const [imaxDigitalTheaterData, setImaxDigitalTheaterData] = useState({
    introImgUrl: undefined,
    theaterList: []
  });

  useEffect(() => {
    if (props.data.topData) {
      setImaxLaserTheaterData({
        introImgUrl: props.data.topData.lasertIntroImgUrl,
        theaterList: getTheater(props.data.theaterData[6])
      });
    }
    if (props.data.theaterData) {
      setImaxDigitalTheaterData({
        introImgUrl: props.data.topData.introImgUrl,
        theaterList: getTheater(props.data.theaterData[1])
      });
    }
  }, [props.data]);

  return (
    <div>
      <ImaxTheater data={imaxLaserTheaterData} />
      <ImaxTheater data={imaxDigitalTheaterData} />
    </div>
  );
  
};

export default ImaxContent;
