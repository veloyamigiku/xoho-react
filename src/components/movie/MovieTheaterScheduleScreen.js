import classes from './MovieTheaterScheduleScreen.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieTheaterScheduleScreen = (props) => {

  var movieScheduleScreenList = [];
  if (props.data.screen && props.data.screen.length > 0) {
    props.data.screen.forEach(function (movieScheduleScreen, movieScheduleScreenIdx) {
      var movieScheduleScreenTermList = [];
      if (movieScheduleScreen.term && movieScheduleScreen.term.length > 0) {
        movieScheduleScreen.term.forEach(function (movieScheduleScreenTerm, movieScheduleScreenTermIdx) {
          movieScheduleScreenTermList.push(
            <div
            className={classes.MovieScheduleScreenTermRoot}
              key={"MovieScheduleScreenTerm" + movieScheduleScreenTermIdx}>
              <div className={classes.MovieScheduleScreenTerm}>
                <div>
                  <span className={classes.MovieScheduleScreenTermStart}>
                    {
                      String(movieScheduleScreenTerm.startHour).padStart(2, '0') +
                      ":" +
                      String(movieScheduleScreenTerm.startMinute).padStart(2, '0')
                    }
                  </span>
                  <span className={classes.MovieScheduleScreenTermInterval}> ~ </span>
                  <span className={classes.MovieScheduleScreenTermEnd}>
                    {
                      String(movieScheduleScreenTerm.endHour).padStart(2, '0') +
                      ":" +
                      String(movieScheduleScreenTerm.endMinute).padStart(2, '0')
                    }
                  </span>
                </div>
                <div className={movieScheduleScreenTerm.statusClass}>
                  <span className={classes.MovieScheduleScreenStatusIcon}>
                    <FontAwesomeIcon icon={movieScheduleScreenTerm.statusIcon} />
                  </span>
                  <span className={classes.MovieScheduleScreenStatusTitle}>{movieScheduleScreenTerm.statusTitle}</span>
                </div>
              </div>
            </div>
          );
        });
      }
      movieScheduleScreenList.push(
        <div
          key={"MovieScheduleScreen" + movieScheduleScreenIdx}
          className={classes.MovieScheduleScreen}>
          <div className={classes.MovieScheduleScreenName}>SCREEN{movieScheduleScreen.screen}</div>
          <div className={classes.MovieScheduleScreenTermGroup}>
            {movieScheduleScreenTermList}
          </div>
        </div>
      );
    });
  }

  return (
    <div className={classes.MovieScheduleScreenRoot}>
      <div className={classes.MovieScheduleScreenDate}>
        { props.data.month + "月" + props.data.day + "日(" + props.data.d + ")"}
      </div>
      <div className={classes.MovieScheduleScreenTitle}>{props.data.title}</div>
      <div>
        {movieScheduleScreenList}
      </div>
    </div>
  );
}

export default MovieTheaterScheduleScreen;
