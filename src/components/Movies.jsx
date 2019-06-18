import WatchToggle from './WatchToggle.js'

var Movies = (props) => {
  return (
    <div className = "movies">
      <p>{props.movietitle.title} <WatchToggle watchToggle={props.watchToggle} movie = {props.movietitle.title}/></p>
      {/* <button id = "watched" onClick = {()=>{props.watchToggle(props.movietitle.title)}}>Watched</button> */}     
    </div>
  )
}

export default Movies;