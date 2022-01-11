const ImaxInfoText = function (props) {
  
  return (
    <div>
      <div className="ImaxInfoTextHeader">{props.data.header}</div>
      <div className="ImaxInfoTextBody">{props.data.body}</div>
    </div>
  );

}

export default ImaxInfoText;
