import { useRef } from 'react';
import { createRef } from 'react';
import { useEffect } from 'react';
import MovieContainerItem from './MovieContainerItem';

const MovieContainer = function(props) {

  const movieContrainerItemWrapRef = useRef([]);
  if (props.data && props.data.length > 0) {
    props.data.forEach(function () {
      movieContrainerItemWrapRef.current.push(createRef())
    });
  }

  useEffect(() => {
    if (props.scrollItemIdx !== -1) {
      movieContrainerItemWrapRef.current[props.scrollItemIdx].current.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }, [props.scrollItemIdx]);

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

export default MovieContainer;
