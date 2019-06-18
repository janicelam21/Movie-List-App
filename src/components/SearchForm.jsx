var SearchForm = (props) => {
  return (
    <form onSubmit = {props.form}>
      <input type = "text" name = "option"></input>
      <button>Go!</button>
    </form>
  )
}

export default SearchForm;