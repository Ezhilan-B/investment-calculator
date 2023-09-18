

function FormInput(props) {

    return (
        <p>
            <label htmlFor={props.htmlFor} >{props.label}</label>
            <input type="number" onChange={(event) => props.changeHandler(props.id,event.target.value)} value={props.userInput} id={props.id} />
        </p>
    )
}

export default FormInput;