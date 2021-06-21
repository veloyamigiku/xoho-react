import MovieContainerItem from './MovieContainerItem';

const MovieContainer = function(props) {

  var movieContainerItemList = [];
  if (props.data && props.data.length > 0) {
    props.data.forEach(function (movieContainerItem, movieContainerItemIdx) {
      movieContainerItemList.push(
        <MovieContainerItem
          data={movieContainerItem}
          key={'MovieContainerItem' + movieContainerItemIdx} />
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
