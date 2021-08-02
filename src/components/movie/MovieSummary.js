import classes from './MovieSummary.module.css';

const MovieSummary = (props) => {

  var largeThumb = null;
  var thumbList = [];
  if (props.data.thumb && props.data.thumb.length > 0) {
    largeThumb = (
      <div className={classes.MovieSummaryLargeThumbWrap}>
        <img
          className={classes.MovieSummaryLargeThumb}
          alt="MovieSummaryLargeThumb"
          src={props.data.thumb[0].url} />
      </div>
    );

    props.data.thumb.forEach(function (thumb, thumbIdx) {
      thumbList.push(
        <div
          className={classes.MovieSummaryThumbWrap}
          key={'MovieSummaryThumb' + thumbIdx}>
          <img
            className={classes.MovieSummaryThumb}
            src={thumb.url}
            alt="MovieSummaryThumb" />
        </div>
      );
    })
  }

  var director = null;
  if (props.data.director && props.data.director.length > 0) {
    props.data.director.forEach(function (d) {
      if (director == null) {
        director = d.name;
      } else {
        director += '、' + d.name;
      }
    });
  }

  var performer = null;
  if (props.data.performer && props.data.performer.length > 0) {
    props.data.performer.forEach(function (p) {
      if (performer == null) {
        performer = p.name;
      } else {
        performer += '、' + p.name;
      }
    });
  }

  return (
    <div className={classes.MovieSummary}>
      <div className={classes.MovieSummaryLeft}>
        {largeThumb}
        <div className={classes.MovieSummaryTitle}>{props.data.name}</div>
        <div className={classes.MovieSummarySub}>{props.data.sub}</div>
        <div className={classes.MovieSummaryOption}>
          上映する設備は劇場によって異なります。詳細は
          <a
            className={classes.MovieSummaryOptionLink}
            href="/theater">各劇場のページ</a>
          にてご確認下さい。
        </div>
      </div>
      <div className={classes.MovieSummaryRight}>
        <div className={classes.MovieSummaryThumbGroup}>
          {thumbList}
        </div>
        <div className={classes.MovieSummaryDesc}>{props.data.description}</div>
        <div className={classes.MovieSummaryDirectorWrap}>
          <div className={classes.MovieSummaryHeader}>監督</div>
          <div className={classes.MovieSummaryDirector}>{director}</div>
        </div>
        <div className={classes.MovieSummaryPerformerWrap}>
          <div className={classes.MovieSummaryHeader}>出演</div>
          <div className={classes.MovieSummaryPerformer}>声の出演：{performer}</div>
        </div>
        <div className={classes.MovieSummaryRunningTimeMinute}>
          {'[' + props.data.name + '　上映時間：' + props.data.runningTimeMinute + '分 ]'}
        </div>
        <div className={classes.MovieSummaryUrlWrap}>
          <a
            className={classes.MovieSummaryUrl}
            href="http://localhost:3000">{props.data.name + '：公式サイト'}</a>
        </div>
      </div>
    </div>
  );
}

export default MovieSummary;
