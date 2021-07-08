import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Theater = function(props) {
  var typeList = [];
  if (props.data.type && props.data.type.length > 0) {
    props.data.type.forEach(function (type, typeIdx) {
      typeList.push(
        <div key={'TheaterType' + typeIdx}>
          {type.icon && <div><FontAwesomeIcon className="TheaterTypeIcon" icon={type.icon} /></div>}
          <div className="TheaterTypeName">{type.name}</div>
        </div>
      );
    });
  }
  return (
    <div>
      <a className="TheaterLink" href={props.data.url}>
        <div className="TheaterName">{props.data.name}</div>
        <div className="TheaterSub">{props.data.sub}</div>
      </a>
      <div>
        {typeList}
      </div>
    </div>
  )
}

export default Theater;
