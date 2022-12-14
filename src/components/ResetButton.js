const ResetButton = (props) => {

  const handleReset = (ev) =>{
    ev.preventDefault();
    props.setFilterByName('')
    props.setFilterBySpecies('')

    }

    return(
         <button onClick={handleReset}>reset</button>
    );};
export default ResetButton;