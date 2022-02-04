import { createRef, useEffect, useRef, useState } from 'react';
import classes from './ImaxMovie.module.css';

export const ImaxMovieConst = {
  imaxMovieImgWrapCount: 5,
  imaxMovieImgWrapWidth: 500,
  imaxMovieWidthPer: 60,
  imaxMovieLeftRightWidth: 30
}

const ImaxMovie = function (props) {

  const [movieData, setMovieData] = useState(props.data.movie);
  const [reset, setReset] = useState(0);

  const imaxMovieImgGroupRef = useRef();
  const imaxMovieImgWrapRef = useRef([]);
  movieData.slice(0, ImaxMovieConst.imaxMovieImgWrapCount).forEach(function (_, imaxMovieIdx) {
    imaxMovieImgWrapRef.current[imaxMovieIdx] = createRef();
  });

  useEffect(() => {
    registShiftPushMovieData();
  });

  const slideMovie = function () {
    const imaxMovieImgGroupWidth = imaxMovieImgGroupRef.current.clientWidth;
    const imaxMovieImgWidth = imaxMovieImgGroupWidth / ImaxMovieConst.imaxMovieImgWrapCount;
    imaxMovieImgGroupRef.current.childNodes[0].style.marginLeft = -imaxMovieImgWidth + 'px';
  }

  const registShiftPushMovieData = function () {
    imaxMovieImgWrapRef.current.forEach(function (ref) {
      ref.current.addEventListener('transitionend', () => {
        setMovieData(movieData.slice(1).concat(movieData[0]));
        setReset(reset + 1);
      });
    });
  }

  const imaxMovieImgWrapNodes = [];
  movieData.slice(0, ImaxMovieConst.imaxMovieImgWrapCount).forEach(function (imaxMovie, imaxMovieIdx) {
    imaxMovieImgWrapNodes.push(
      <div
        key={'ImaxMovieImgWrap' + imaxMovieIdx}
        className={classes.ImaxMovieImgWrap}
        style={{
          width: ImaxMovieConst.imaxMovieImgWrapWidth + 'px'
        }}
        ref={imaxMovieImgWrapRef.current[imaxMovieIdx]}>
        <img
          className={classes.ImaxMovieImg}
          src={imaxMovie.imgUrl}
          alt="ImaxMovieImg" />
      </div>
    );
  });

  return (
    <div
      style={{
        background: 'url(' + props.data.movieTitleBgImgUrl + ') repeat left top'
      }}>
      <div className={classes.ImaxMovieWrap}>
        <div
          className={classes.ImaxMovieLeft}
          style={{
            left: 'calc((100% - ' + ImaxMovieConst.imaxMovieWidthPer + '%) / 2 - ' + ImaxMovieConst.imaxMovieLeftRightWidth + 'px)'
          }} />
        <div
          className={classes.ImaxMovie}
          style={{
            width: ImaxMovieConst.imaxMovieWidthPer + '%'
          }}>
          <div
            className={classes.ImaxMovieImgGroup}
            style={{
              marginRight: 'calc((100% - ' + (ImaxMovieConst.imaxMovieImgWrapWidth * ImaxMovieConst.imaxMovieImgWrapCount) + 'px) / 2)',
              marginLeft: 'calc((100% - ' + (ImaxMovieConst.imaxMovieImgWrapWidth * ImaxMovieConst.imaxMovieImgWrapCount) + 'px) / 2)'
            }}
            ref={imaxMovieImgGroupRef}
            onClick={() => slideMovie()}
            key={reset}>    
            {imaxMovieImgWrapNodes}
          </div>
        </div>
        <div
          className={classes.ImaxMovieRight}
          style={{
            right: 'calc((100% - ' + ImaxMovieConst.imaxMovieWidthPer + '%) / 2 - ' + ImaxMovieConst.imaxMovieLeftRightWidth + 'px)'
          }} />
      </div>
    </div>
  );

}

export default ImaxMovie;
