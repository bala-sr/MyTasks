import { SubmissionError } from 'redux-form';

async function submitEdit(values) {
    let users = JSON.parse(localStorage.getItem("users"));
    // console.log(users);
    // Handle validations of Edit user form
    let objIndex = users.findIndex((obj => obj.id == localStorage.getItem("editUser")));
    console.log(objIndex);
    if(!values.name) {
        throw new SubmissionError({
            name: "Name is not filled",
            _error: "Login failed!"
        })
    }
    else if(!values.gender) {
        throw new SubmissionError({
            name: "Gender is not selected",
            _error: "Login failed!"
        })
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        throw new SubmissionError({
            email: "The email entered is in wrong format!",
            _error: "Login failed!"
        });
    } else if (values.phone.length !== 10) {
        throw new SubmissionError({
            phone: "Phone number must be 10 digits!",
            _error: "Login failed!"
        });
    }
    else if(!values.city.length) {
        throw new SubmissionError({
            city: "City is not filled",
            _error: "Login failed!"
        });
    } else if (values.pincode.length !== 6){
        throw new SubmissionError({
            pincode: "The pincode entered does not exist!",
            _error: "Login failed!"
        });
    } else {
        //Updating User details
        users[objIndex].name = values.name;
        users[objIndex].gender = values.gender;
        users[objIndex].email = values.email;
        users[objIndex].phone = values.phone;
        users[objIndex].city = values.city;
        users[objIndex].pincode = values.pincode;
        //Storing the user data in localStorages
        // localStorage.setItem("users", users);
        localStorage.setItem('users', JSON.stringify(users));    
        localStorage.removeItem("editUser");  
    }
}

export default submitEdit;