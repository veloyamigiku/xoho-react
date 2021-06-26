import React, { useRef } from 'react';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import { createRef } from 'react';
import MovieContainerItem from './MovieContainerItem';

const MovieContainer = function(props, ref) {

  const movieContrainerItemWrapRef = useRef([]);
  if (props.data && props.data.length > 0) {
    props.data.forEach(function () {
      movieContrainerItemWrapRef.current.push(createRef())
    });
  }

  useImperativeHandle(ref, () => ({
    scrollToMovieContainerItem: (dateIdx) => {
      movieContrainerItemWrapRef.current[dateIdx].current.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }));

  var movieContainerItemList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (movieContainerItem, movieContainerItemIdx) {
      movieContainerItemList.push(
        <div
          ref={movieContrainerItemWrapRef.current[movieContainerItemIdx]}
          key={'MovieContainerItemWrap' + movieContainerItemIdx} >
          <MovieContainerItem
            data={movieContainerItem} />
        </div>
      );
    });
  }
  return (
    <div>
      {movieContainerItemList}
    </div>
  );

}

export default forwardRef(MovieContainer);
