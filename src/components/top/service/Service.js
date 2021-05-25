import classes from './Service.module.css';
import ServiceButton from './ServiceButton';
import ServiceItem from './ServiceItem';

const Service = function(props) {

  var serviceItemList = [];
  if (props.data.item && props.data.item.length > 0) {
    props.data.item.forEach(function (serviceItem, serviceItemIdx) {
      serviceItemList.push(
        <ServiceItem
          data={serviceItem}
          key={'ServiceItem' + serviceItemIdx} />
      );
    });
  }

  var serviceButtonList1 = [];
  if (props.data.buttonGroup1 && props.data.buttonGroup1.length > 0) {
    props.data.buttonGroup1.forEach(function (serviceButton, serviceButtonIdx) {
      serviceButtonList1.push(
        <ServiceButton
          data={serviceButton}
          key={'ServiceButton1' + serviceButtonIdx} />
      );
    });
  }

  var serviceButtonList2 = [];
  if (props.data.buttonGroup2 && props.data.buttonGroup2.length > 0) {
    props.data.buttonGroup2.forEach(function (serviceButton, serviceButtonIdx) {
      serviceButtonList2.push(
        <ServiceButton
          data={serviceButton}
          key={'ServiceButton2' + serviceButtonIdx} />
      );
    });
  }

  return (
    <div className={classes.Service}>
      <div className={classes.ServiceItemGroup}>
        {serviceItemList}
      </div>
      <div className={classes.ServiceButtonGroup}>
        {serviceButtonList1}
      </div>
      <div className={classes.ServiceButtonGroup}>
        {serviceButtonList2}
      </div>
    </div>
  );
}

export default Service;
