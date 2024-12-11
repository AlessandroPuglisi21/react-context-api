import axios from "axios";
import { BASE_URI } from "../src/pages/config";

export default function DeletePost({ onDelete = () => {}, id }) {
    function deletePost() {
        if (confirm('Sei sicuro di voler eliminare questo post?')) {
            console.log(`POST ${id} ELIMINATO`);

            axios.delete(`${BASE_URI}/posts/${id}`)
                .then(() => {
                    onDelete(); 
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    return (
        <button className="deleteButton" onClick={deletePost}>Elimina</button>
    );
}
