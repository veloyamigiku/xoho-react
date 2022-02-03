import { createRef, useEffect, useRef, useState } from 'react';
import classes from './ImaxMovie.module.css';

export const ImaxMovieConst = {
  movieItemCount: 5,
  movieItemWidth: 500
}

const ImaxMovie = function (props) {

  const [movieData, setMovieData] = useState(props.data.movie);
  const [reset, setReset] = useState(0);

  const imaxMovieImgGroupRef = useRef();
  const imaxMovieImgWrapRef = useRef([]);
  movieData.slice(0, ImaxMovieConst.movieItemCount).forEach(function (_, imaxMovieIdx) {
    imaxMovieImgWrapRef.current[imaxMovieIdx] = createRef();
  });

  useEffect(() => {
    registShiftPushMovieData();
  });

  const slideMovie = function () {
    const imaxMovieImgGroupWidth = imaxMovieImgGroupRef.current.clientWidth;
    const imaxMovieImgWidth = imaxMovieImgGroupWidth / ImaxMovieConst.movieItemCount;
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
  movieData.slice(0, ImaxMovieConst.movieItemCount).forEach(function (imaxMovie, imaxMovieIdx) {
    imaxMovieImgWrapNodes.push(
      <div
        key={'ImaxMovieImgWrap' + imaxMovieIdx}
        className={classes.ImaxMovieImgWrap}
        style={{
          width: ImaxMovieConst.movieItemWidth + 'px'
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
      <div className={classes.ImaxMovie}>
        <div
          className={classes.ImaxMovieImgGroup}
          style={{
            marginRight: 'calc((100% - ' + (ImaxMovieConst.movieItemWidth * ImaxMovieConst.movieItemCount) + 'px) / 2)',
            marginLeft: 'calc((100% - ' + (ImaxMovieConst.movieItemWidth * ImaxMovieConst.movieItemCount) + 'px) / 2)'
          }}
          ref={imaxMovieImgGroupRef}
          onClick={() => slideMovie()}
          key={reset}>
          {imaxMovieImgWrapNodes}
        </div>
      </div>
    </div>
  );

}

export default ImaxMovie;
