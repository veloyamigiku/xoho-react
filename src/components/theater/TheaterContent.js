import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import classes from './TheaterContent.module.css';
import TheaterPrefecture from './TheaterPrefecture';

const TheaterContent = function(props, ref) {
  
  const [isOpen, setIsOpen] = useState(false);
  const [openHeight, setOpenHeight] = useState('auto');
  // 開いた状態の要素の高さを取得するため、閉じた状態の要素の高さの初期状態は、autoとする。
  const [closeHeight, setCloseHeight] = useState('auto');

  const topDivRef = useRef();

  useImperativeHandle(ref, () => ({
    openClose: () => {
      setIsOpen(!isOpen);
    }
  }));

  useEffect(() => {
    // 開いた状態の要素の高さを取得してステートに保管する。
    setOpenHeight(topDivRef.current.clientHeight + 'px');
    // 開いた状態の要素の高さを取得した後に、適切な閉じた状態の高さをステートに保管する。
    setCloseHeight('0');
  }, []);

  var prefectureList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (prefecture, prefectureIdx) {
      prefectureList.push(
        <TheaterPrefecture
          data={prefecture}
          key={'TheaterPrefecture' + prefectureIdx} />
      );
    });
  }

  return (
    <div
      className={classes.TheaterContent}
      style={{
        height: isOpen ? openHeight : closeHeight
      }}
      ref={topDivRef}>
      {prefectureList}
    </div>
  );
}

export default forwardRef(TheaterContent);
