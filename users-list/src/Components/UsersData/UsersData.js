import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import "./UsersData.css";


function UsersData() {
    let history = useHistory();
    let usersList = JSON.parse(localStorage.getItem("users"));
    const [userList, setUserList] = useState(usersList);
    
    
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    }

    //Reordering the users list on drag and drop
    function handleOnDragEnd(result) {
        setUserList(reorder(userList, result.source.index, result.destination.index));
        // console.log(userList);
    }

    //Deleting User
    const deleteUser = (id) => {
        let removeUser = usersList.map(user => user.id).indexOf(id);
        usersList.splice(removeUser, 1);
        // console.log(usersList);

        const users = JSON.parse(localStorage.getItem('users'));
        const filtered = users.filter(item => item.id !== id);
        localStorage.setItem('users', JSON.stringify(filtered));
        // console.log(JSON.parse(localStorage.getItem('users')));
        usersList = JSON.parse(localStorage.getItem('users'));
        setUserList(usersList);
        alert("User deleted!");
    }

    const editUsers = (user, e) => {
        // console.log(e.target.id);
        if(e.target.id === "") {
            history.push(`/editUsers/${user.id}`);
        }

    }

    return (
        <div className="user-container">
            <h1>User Details</h1>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <table className="user-data">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <Droppable droppableId="user-row">
                        {(provided) => (
                            <tbody {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                userList ? userList.map((user, index) => {
                                    return (
                                        
                                        // <UserData user={user}>
                                        <Draggable key={user.id} draggableId={user.id} index={index}>
                                        {(provided) => ( 
                                                <tr className="user-row" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} onClick={(e) => editUsers(user, e)}>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.gender}</td>
                                                <td>
                                                     <button id={user.id} className="btn-delete-user" onClick={() => deleteUser(user.id)}>Delete user</button>
                                                 </td>
                                             </tr>
                                             )}
                                        </Draggable>
                                    )
                                }) : null
                            }
                            {provided.placeholder}
                            </tbody>
                        )}
                    </Droppable>
                </table>
            </DragDropContext>
        </div>
    )
}

export default UsersData;
