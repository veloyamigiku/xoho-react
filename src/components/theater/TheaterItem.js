import classes from './TheaterItem.module.css';
import TheaterHeader from './TheaterHeader';
import TheaterContent from './TheaterContent';
import { useRef } from 'react';

const TheaterItem = function(props) {

  const theaterContentRef = useRef();

  const openCloseContent = () => {
    theaterContentRef.current.openClose();
  }

  return (
    <div className={classes.TheaterItem}>
      <TheaterHeader
        data={props.data.header}
        click={() => openCloseContent()} />
      <TheaterContent
        data={props.data.prefecture}
        ref={theaterContentRef} />
    </div>
  );
}

export default TheaterItem;
