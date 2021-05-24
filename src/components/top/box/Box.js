import classes from './Box.module.css';
import BoxItem from './BoxItem';

const Box = function(props) {

  var boxItemList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (boxItem, boxItemIdx) {
      boxItemList.push(
        <BoxItem
          data={boxItem}
          key={'BoxItem' + boxItemIdx} />
      );
    });
  }

  return (
    <div className={classes.Box}>
      {boxItemList}
    </div>
  );
}

export default Box;
