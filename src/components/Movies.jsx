import WatchToggle from './WatchToggle.js'
import Panel from './Panel.js'

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle () {
    this.setState((state) => {
      return ({toggled: !state.toggled})
    })

  }

  render() {
    return (
      <div className = "movies">
        <a href = '#' onClick = {this.handleToggle}>{this.props.movietitle.title}</a>
        {this.state.toggled === true ? <Panel movieinfo = {this.props.movietitle}/> : null}
        {/* <WatchToggle watchToggle={this.props.watchToggle} movie = {this.props.movietitle.title}/> */}
        {/* <button id = "watched" onClick = {()=>{props.watchToggle(props.movietitle.title)}}>Watched</button> */}     
      </div>
    )
  }
}

export default Movies;