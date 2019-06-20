const Panel = (props) => {
  console.log(props);
  return (
    <div>
      <p>Year: {props.movieinfo.Year}</p>
      <p>Runtime: {props.movieinfo.Runtime}</p>
      <p>Metascore: {props.movieinfo.Metascore}</p>
      <p>imdbRating: {props.movieinfo.imdbRating}</p>
    </div>
  )
}

export default Panel;