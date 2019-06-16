import movies from "../data/examplemovies.js"
import MovieContainer from "./MovieContainer.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.movies = movies
  }

  render() {
    return (
    <div>
      <h1 id='title'>MovieList</h1>
      <div id = "container">
        <MovieContainer movies = {movies}/>
      </div>
      
    </div>
    )
  }
}

export default App;

