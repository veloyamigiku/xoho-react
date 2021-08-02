const MovieSummary = (props) => {

  var thumbList = [];
  if (props.data.thumb && props.data.thumb.length > 0) {
    props.data.thumb.forEach(function (thumb, thumbIdx) {
      thumbList.push(
        <div
          className="MovieSummaryThumbWrap"
          key={'MovieSummaryThumb' + thumbIdx}>
          <img
            className="MovieSummaryThumb"
            src={thumb.url} />
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
    <div>
      <div className="MovieSummaryLeft">
        <div className="MovieSummaryTitle">{props.data.name}</div>
        <div className="MovieSummarySub">{props.data.sub}</div>
        <div className="movieSummaryOption">
          上映する設備は劇場によって異なります。詳細は
          <a
            className="MovieSummaryOptionLink"
            href="/theater">各劇場のページ</a>
        </div>
      </div>
      <div className="MovieSummaryRight">
        <div className="MovieSummaryThumbGroup">
          {thumbList}
        </div>
        <div className="MovieSummaryDesc">{props.data.description}</div>
        <div className="MovieSummaryDirectorWrap">
          <div className="MovieSummaryHeader">監督</div>
          <div className="MovieSummaryDirector">{director}</div>
        </div>
        <div className="MovieSummaryPerformerWrap">
          <div className="MovieSummaryHeader">出演</div>
          <div className="MovieSummaryPerformer">声の出演：{performer}</div>
        </div>
        <div className="MovieSummaryRunningTimeMinute">
          {'[' + props.data.name + '　上映時間：' + props.data.runningTimeMinute + '分 ]'}
        </div>
        <div className="MovieSummaryUrlWrap">
          <a
            className="MovieSummaryUrl"
            href="http://localhost:3000">{props.data.name + '：公式サイト'}</a>
        </div>
      </div>
    </div>
  );
}

export default MovieSummary;
