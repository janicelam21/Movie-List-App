import Movies from './Movies.js'

var MovieContainer = (props) => {
  return (
    <div>
      {props.movies.map((movie) => <Movies movietitle = {movie}/>)}
    </div>
  )
}

export default MovieContainer;