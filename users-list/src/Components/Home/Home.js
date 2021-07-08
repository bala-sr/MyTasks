import React from 'react';
import { useHistory } from 'react-router';
import UsersData from "../UsersData/UsersData";
import "./Home.css";

function Home() {
    let history = useHistory();
    const addUsers = () => {
        history.push("/addUsers");
    }

    return (
        <div className="home-container">
            <button id="btn-add-user" className="btn" onClick={addUsers}>Add User</button>
            <UsersData />
        </div>
    )
}

export default Home;
