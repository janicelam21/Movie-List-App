import movies from "../data/examplemovies.js"
import MovieContainer from "./MovieContainer.js"
import SearchForm from "./SearchForm.js"
import ShowAll from "./ShowAll.js"
import AddForm from "./AddForm.js"
import Watched from "./Watched.js"
import Unwatched from "./Unwatched.js"

// still need to fix toggle color between page loads


class App extends React.Component {
  constructor(props) {
    super(props);
    this.movielist = [...movies]
    this.toggled = [];
    this.watched = [];
    this.state = {
        usersearch: movies,
        filter: [],
        watchedList:[]
    }
    this.handleCheck= this.handleCheck.bind(this);
    this.handleShowAll=this.handleShowAll.bind(this);
    this.handleAdd=this.handleAdd.bind(this)
    this.handleWatchToggle=this.handleWatchToggle.bind(this);
    this.handleWatchedVideos=this.handleWatchedVideos.bind(this);
    this.handleUnwatchedVideos=this.handleUnwatchedVideos.bind(this);
  }

  handleCheck(event) {
    event.preventDefault();
    var userSearch = event.target.children.option.value;
    var newarr = []
    for (var i = 0; i<this.state.usersearch.length; i++) {
      if (this.state.usersearch[i].title.toUpperCase().includes(userSearch.toUpperCase())) {
          newarr.push(this.state.usersearch[i])
      }
    }
    this.setState({filter: newarr})
    this.setState((state) => {
      return {usersearch: state.filter}})
  }


  handleShowAll(event) {
    event.preventDefault();
    this.setState({usersearch:this.movielist})
  }


  handleAdd(event) {
    event.preventDefault();
    var userAdd = event.target.children.add.value; 
    if (userAdd) {
      this.movielist.unshift({title:userAdd})
      this.setState({usersearch:this.movielist})
    }
  }


  handleWatchToggle(title) {
    event.preventDefault();
    var thisroundtoggled = false

    for (var i = 0; i<this.toggled.length; i++) {
      if (this.toggled[i].title === title && this.toggled[i].toggle === true) {
        this.toggled[i].toggle = false
        document.getElementById(title).style.color = "black"
        for (var j = 0; j<this.watched.length; j++) {
          if (this.watched[j].title === title) {
            this.watched.splice(j,1)
          }
        }
        console.log(this.watched)
        thisroundtoggled = true;
        break;

      } else if (this.toggled[i].title === title && this.toggled[i].toggle === false) {
        this.toggled[i].toggle = true
        document.getElementById(title).style.color = "green"
        // add to this.watched
        this.watched.push({title:title})
        console.log(this.watched)
        thisroundtoggled = true;
        break;
      } 
    }
    
    if (thisroundtoggled===false) {
      this.toggled.push({title:title,toggle:true})
      document.getElementById(title).style.color = "green"
      this.watched.push({title:title})
      console.log(this.watched)
    }
  }


  handleWatchedVideos() {
    event.preventDefault();
    this.setState({usersearch: this.watched})
  }


  handleUnwatchedVideos() {
    event.preventDefault();
    const unwatched = [];
    const watchedTitles = [];
    for (var i = 0; i<this.watched.length; i++) {
      watchedTitles.push(this.watched[i].title);
    }
    for (var i = 0; i<this.movielist.length; i++) {
      if (!watchedTitles.includes(this.movielist[i].title)){
        unwatched.push(this.movielist[i]);
      }
    }
    console.log(unwatched)
    this.setState({usersearch: unwatched})
  }


  render() {
    return (
    <div>
      <h1 className ='title'>MovieList</h1>
      <div className = "container">
        <AddForm form = {this.handleAdd}/>
        <SearchForm form = {this.handleCheck}/>
        <ShowAll button = {this.handleShowAll}/> <br></br>
        <Watched click = {this.handleWatchedVideos}/> 
        <Unwatched click = {this.handleUnwatchedVideos} />
        <MovieContainer movies = {this.state.usersearch} watchToggle = {this.handleWatchToggle}/>
      </div>
    </div>
    )
  }
}

export default App;

