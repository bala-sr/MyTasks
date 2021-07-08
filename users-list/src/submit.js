import { SubmissionError } from 'redux-form';
import { useHistory } from 'react-router';
import randomstring from "randomstring";


async function submit(values) {

    // Handle validations of AddUser form
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
        // window.alert("form submitted");
        let user = {
            id: randomstring.generate(5),
            name: values.name,
            gender: values.gender,
            email: values.email,
            phone: values.phone,
            city: values.city,
            pincode: values.pincode
        }
        //Storing the user data in localStorages
        const users = (() => {
            const fieldValue = localStorage.getItem('users');
            return fieldValue === null
            ? []
            : JSON.parse(fieldValue);
        })();
        
        users.push(user);
        
        localStorage.setItem('users', JSON.stringify(users)); 
        alert("User added");     
    }
}

export default submit;