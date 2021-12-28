const ImaxTheater = function (props) {

  const theaterList = [];
  props.data.theater.forEach(function (theater, theaterIdx) {
    theaterList.push(
      <div key={'TheaterListItem' + theaterIdx}>
        <a href={theater.url}>
          <img
            className="TheaterIntroImg"
            src={theater.introImgUrl[props.data.imaxType]}
            alt="TheaterIntroImg" />
        </a>
      </div>
    );
  });

  return (
    <div>
      <div>
        <img
          className="IntroImg"
          alt="IntroImg"
          src={props.data.introImgUrl} />
      </div>
      <div>
        {theaterList}
      </div>
      <div>
        <a href="http://localhost:3000">{props.data.theaterAbout.title}</a>
      </div>
    </div>
  );
  
};

export default ImaxTheater;
