const MovieTheaterItem = (props) => {
  return (
    <div>
      {props.data.pref && <div className="MovieTheaterItemPrefecture">{props.data.pref}</div>}
      <div className="MovieTheaterItemTitle">TOHOシネマズ {props.data.name}</div>
    </div>
  );
}

export default MovieTheaterItem;
