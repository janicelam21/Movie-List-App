var AddForm= (props) => {
  return (
    <form onSubmit = {props.form}>
      <input type = "text" name='add'></input>
      <button>Add</button>
    </form>
  )
}

export default AddForm;