import React, {useEffect} from 'react';
import { useHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { load as loadAccount } from './account';
import submitEdit from "../../submitEdit";
import { createBrowserHistory } from "history";

function EditUsers(props) {
    let userId = props.match.params.id;
    localStorage.setItem("editUser", userId);
    let history = useHistory();
    let usersData = JSON.parse(localStorage.getItem("users"));
    let userData = usersData.filter((user) => user.id === userId)[0];
    let data = {
        name: userData.name,
        gender: userData.gender,
        email: userData.email,
        phone: userData.phone,
        city: userData.city,
        pincode: userData.pincode
    };
    // console.log(usersData[objIndex]);

    const home = () => {
        history.push("/");
    }
    const renderInput = ({ input, label, type, meta: { touched, error } }) => (
        <div>
            {/* { console.log(userData[input.name]) } */}
            <label>{label}</label>
            <div>
            <input  {...input} placeholder={label} type={type} onChange={input.onChange} />{input.name === "gender" ? input.value : null}
            {touched && error && <span className="error-msg">{error}</span>}
            </div>
        </div>
    )
    //Preload the users data in the form
    useEffect(() => {
        load(data)
    })
    const { handleSubmit, load } = props;

    createBrowserHistory({
        forceRefresh: true
        });

    return (
        <div>
            <button id="btn-home" className="btn" onClick={home}>Home</button>
            <form className="form-edit-user" onSubmit={handleSubmit(submitEdit)}>
                <h1>Edit User</h1>

                    <Field name="name" component={renderInput} type="text" label="Name" />

                <div className="inp">
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
                    <Field name="email" component={renderInput} type="email" label="Email" />
                </div>
                <div className="inp">
                    <Field name="phone" component={renderInput} type="text"  label="Phone" />
                </div>
                <div className="inp">
                    <Field name="city" component={renderInput} type="text" label="City" />
                </div>
                <div className="inp">
                    <Field name="pincode" component={renderInput} type="text" label="Pincode" />
                </div>
                <button id="btn-submit" type="submit">Update</button>
            </form>
        </div>
    )
}

EditUsers = reduxForm({
    form: "edit-users",
})(EditUsers);

EditUsers = connect(
    (state) => ({
        initialValues: state.account.data
    }),
    { load: loadAccount } 
)(EditUsers);

export default EditUsers