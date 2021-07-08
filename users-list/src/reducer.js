export default function deleteUserReducer(state = localStorage.getItem("users"), action) {
    if(action.type === "DELETE") {
        return state.filter(state.map((item) => item.id !== action.payload.id));
    }
}