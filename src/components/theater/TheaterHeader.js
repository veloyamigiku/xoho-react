const TheaterHeader = function(props) {
  return (
    <div>
      <div className="TheaterHeaderTitle">{props.data.title}</div>
      <div className="TheaterHeaderSub">{props.data.sub}</div>
      <div className="TheaterHeaderOption">{props.data.option}</div>
    </div>
  );
}

export default TheaterHeader;
