import LargeButton from "./LargeButton";

const LargeButtonContainer = function(props) {

  var largeButtonList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (largeButton, largeButtonIdx) {
      largeButtonList.push(
        <LargeButton
          data={largeButton}
          key={'LargeButton' + largeButtonIdx} />
      );
    });
  }

  return (
    <div>
      {largeButtonList}
    </div>
  );
}

export default LargeButtonContainer;
