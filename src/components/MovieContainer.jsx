import Movies from './Movies.js'

var MovieContainer = (props) => {
  return (
    props.movies.length > 0 ? <div className = 'eamovies'>{props.movies.map((movie) => <Movies movietitle = {movie} watchToggle = {props.watchToggle}/>)}</div> : <div>NO MOVIES YET</div>
  )
}

export default MovieContainer;