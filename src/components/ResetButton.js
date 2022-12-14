import '../styles/components/ResetButton.scss';

const ResetButton = (props) => {

  const handleReset = (ev) =>{
    ev.preventDefault();
    props.setFilterByName('')
    props.setFilterBySpecies('')

    }

    return(
         <button onClick={handleReset} className="reset-btn">Reset</button>
    );};
export default ResetButton;