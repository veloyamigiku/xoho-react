import classes from './Information.module.css';
import InformationItem from './InformationItem';

const Information = function(props) {

  var informationItemList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (info, infoIdx) {
      informationItemList.push(
        <InformationItem
          data={info}
          key={'InformationItem' + infoIdx} />
      );
    });
  }

  return (
    <div className={classes.Information}>
      {informationItemList}
    </div>
  );
}

export default Information;
