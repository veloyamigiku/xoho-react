import classes from './ServiceItem.module.css';

const ServiceItem = function(props) {
  return (
    <div className={classes.ServiceItem}>
      <a
        className={classes.ServiceItemLink}
        href={props.data.url}>
        <div className={classes.ServiceItemContent}>
          <div>
            <img
              className={classes.ServiceItemImg}
              src={props.data.imgUrl}
              alt='ServiceItemImg' />
          </div>
          <div>
            <div className={classes.ServiceItemTitle}>{props.data.title}</div>
            <div className="ServiceItemSub">{props.data.sub}</div>
          </div>
        </div>  
      </a>
    </div>
  );
}

export default ServiceItem;
