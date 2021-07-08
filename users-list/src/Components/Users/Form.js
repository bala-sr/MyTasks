import React from 'react';
import { useHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import submit from "../../submit";
import "./AddUsers.css";

function Form(props) {
    let history = useHistory();
    const home = () => {
        history.push("/");
    }

    const renderInput = ({ input, label, type, meta: { touched, error } }) => (
        <div>
            {/* { console.log(input) } */}
            <label>{label}</label>
            <div>
            <input {...input} placeholder={label} type={type} />{input.name === "gender" ? input.value : null}
            {touched && error && <span className="error-msg">{error}</span>}
            </div>
        </div>
    )

    const { error, handleSubmit } = props;
    return (
        <form className="form-add-user" onSubmit={handleSubmit(submit)}>
            <h1>Add User</h1>

                {/* <label htmlFor="Name"></label><br /> */}
                <Field name="name" component={renderInput} type="text" label="Name" />

            <div className="inp">
                {/* <label htmlFor="lastName">Gender</label><br /> */}
                <div>
                    <label>
                        <Field name="gender" component={renderInput} type="radio" value="Male" label="Gender" />

                    </label>
                    <label>
                        <Field name="gender" component={renderInput} type="radio" value="Female" />
                        
                    </label>
                </div>
            </div>
            <div className="inp">
                <Field name="email" component={renderInput} type="email" placeholder="Email" label="Email" />
            </div>
            <div className="inp">
                <Field name="phone" component={renderInput} type="text" placeholder="Phone Number" label="Phone" />
            </div>
            <div className="inp">
                <Field name="city" component={renderInput} type="text" placeholder="City" label="City" />
            </div>
            <div className="inp">
                <Field name="pincode" component={renderInput} type="text" placeholder="Pincode" label="Pincode" />
            </div>
            <button id="btn-submit" type="submit">Submit</button>
        </form>
    )
}

export default Form;
