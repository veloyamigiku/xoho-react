const MovieTheaterScheduleDate = (props) => {

  var scheduleDateList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (scheduleDate, scheduleDateIdx) {
      const dateTitle =
        scheduleDate.month +
        "/" +
        scheduleDate.day +
        "(" +
        scheduleDate.d +
        ")";
      scheduleDateList.push(
        <div key={'MovieTheaterScheduleDate' + scheduleDateIdx}>
          <div className="MovieTheaterScheduleDateTitle">{dateTitle}</div>
          <div className="MovieTheaterScheduleDateOption">{scheduleDate.option}</div>
        </div>
      );
    });
  }
  return (
    <div>
      <div>
        {scheduleDateList}
      </div>
    </div>
  );
}

export default MovieTheaterScheduleDate;
