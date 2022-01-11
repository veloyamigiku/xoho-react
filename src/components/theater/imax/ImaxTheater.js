import classes from "./ImaxTheater.module.css";

const ImaxTheater = function (props) {

  const theaterList = [];
  props.data.theater.forEach(function (theater, theaterIdx) {
    theaterList.push(
      <div
        className={classes.ImaxTheaterListItem}
        key={'TheaterListItem' + theaterIdx}>
        <a href={theater.url}>
          <img
            className={classes.TheaterIntroImg}
            src={theater.introImgUrl[props.data.imaxType]}
            alt="TheaterIntroImg" />
        </a>
      </div>
    );
  });

  return (
    <div className={classes.ImaxTheater}>
      <div className={classes.ImaxIntroImgWrap}>
        <img
          className="IntroImg"
          alt="IntroImg"
          src={props.data.introImgUrl} />
      </div>
      <div className={classes.ImaxTheaterList}>
        {theaterList}
      </div>
      <div className={classes.ImaxTheaterAbout}>
        <a
          className={classes.ImaxTheaterAboutTitle}
          href="http://localhost:3000">{props.data.theaterAbout.title}</a>
      </div>
    </div>
  );
  
};

export default ImaxTheater;
