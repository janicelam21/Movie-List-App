const stylized = {
  color: 'red'
}

const WatchToggle = (props) => {
  return (
    <button id = {props.movie} onClick = {() => {props.watchToggle(props.movie)}}>Watched?</button>
  )
}

export default WatchToggle;