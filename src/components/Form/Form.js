import { useState } from "react";
import classes from "./Form.module.css"
import FormInput from "../FormInput/FormInput";

function Form(props) {
    
    const initialState = {
        "current-savings": 1000,
        "yearly-contribution": 100,
        "expected-return": 8,
        duration: 10
    };
    const [userInputData, setUserInputData] = useState(initialState);

    function inputChangeHandler(input, value) {
        setUserInputData((prevInput) => {
            return {
                ...prevInput,
                [input]: value
            }
        });
    }


    function resetFields(){
        setUserInputData(initialState);
    }

    function submitHandler(event) {
        event.preventDefault();

        props.onFormSubmit(userInputData);
        resetFields();
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes["input-group"]}>
                <FormInput htmlFor="current-savings" label="Current Savings ($)" changeHandler={inputChangeHandler} userInput={userInputData["current-savings"]} id="current-savings" />
                <FormInput htmlFor="yearly-contribution" label="Yearly Savings ($)" changeHandler={inputChangeHandler} userInput={userInputData["yearly-contribution"]} id="yearly-contribution" />
            </div>
            <div className={classes["input-group"]}>
                <FormInput htmlFor="expected-return" label="Expected Interest (%, per year)" changeHandler={inputChangeHandler} userInput={userInputData["expected-return"]} id="expected-return" />
                <FormInput htmlFor="duration" label="Investment Duration (years)" changeHandler={inputChangeHandler} userInput={userInputData.duration} id="duration" />
            </div>
            <p className={classes.actions}>
                <button type="reset" onClick={resetFields} className={classes.buttonAlt}>
                    Reset
                </button>
                <button type="submit" className={classes.button}>
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default Form;