import {useState, useEffect} from "react";
import axios from "axios";
import {Button} from "react-bulma-components";

/** Le composant pour afficher les posts d'un thread
* @param id_thread id du thread
* @param id_post id du post
* @param titre titre du post
* @param contenu contenu du post
* @param createur createur du post
* @param date date du post
* @param showErrorMessage Fonction pour montrer un message d'erreur
* @param showSuccessMessage Fonction pour montrer un message de succès
*/
export const ShowPosts = ({id_thread, id_post, titre, contenu, createur, date, showErrorMessage, showSuccessMessage}) => {

    /**
     * l'id du créateur
     */
    let id_createur = createur;

    let showDeletePost = false;

    /**
     * L'admin du post
     */
    const [admin, setadmin] = useState([]);

    /**
     * l'id de l'utilisateur
     */st [userResponse, setUserResponse] = useState([]);

    /**
     * le nom de l'utilisateur
     */
    const [user, setUser] = useState([]);

    useEffect(() => {
        (async () => {

            // On essaye de faire la requête pour récupérer l'utilisateur

            try {
                const response = await axios.get(`/api/user/${id_createur}`);

                // On met à jour l'utilisateur
                setUser(response.data[0].pseudo);

                const response_user = await axios.get(`/api/userdata`);
                setUserResponse(response_user.data[0].id_utilisateur);
                setadmin(response_user.data[0].admin);
            }

                // Si on attrape une erreur alors on montre un message d'erreur
            catch (e) {
                showErrorMessage("Il y a eu une erreur lors de la récupération des données", e.response.data);
            }

        })()
    }, );

    if(id_createur == userResponse || admin == 1){
        showDeletePost = true;
    }

    
    // Fonction pour supprimer un post
    const deletePost = async () => {

        const link_delete = `/api/thread/${id_thread}/${id_post}`;
        try {

            axios.delete(link_delete, {
                id_post: id_post
            });

            window.location.reload();
            showSuccessMessage("Vous avec supprimé le post avec succès");
        }
        
        // Si on attrape une erreur alors on montre un message d'erreur
        catch (e) {
            console.log(e.message());
           showErrorMessage("Il y a eu une erreur lors de la supression du post", e.response);
        }


    } 
    

    return (
        
        <div className="postforum">
            <a href={"/thread/" + id_thread + "/" + id_post}>
                    <div className="postforum-row">
                        <div className="postforum-column">
                        <h4>{titre}</h4>
                    </div>
                    <div className="postforum-column">
                        <h4>{contenu}</h4>

                    </div>
                    <a href={"/user/" + id_createur}><div className="postforum-column">
                        <span>{user}</span>
                    </div></a>
                    <div className="postforum-column">
                        <span>{date}</span>
                    </div>
                </div>
            </a>
            {showDeletePost && (
                     <div className="postforum-delete">
                        <Button className="is-block is-danger is-small" onClick={deletePost} >Supprimer</Button>
                    </div>
                    )}
        </div>
    )
}