import classes from './ImportantInformation.module.css';
import ImportantInformationItem from './ImportantInformationItem';

const ImportantInformation = function(props) {

  var importantInformationItemList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (importantInformationItem, importantInformationItemIdx) {
      importantInformationItemList.push(
        <ImportantInformationItem
          data={importantInformationItem}
          key={'ImportantInformationItem' + importantInformationItemIdx} />
      );
    });
  }

  return (
    <div className={classes.ImportantInformation}>
      {importantInformationItemList}
    </div>
  );
}

export default ImportantInformation;
