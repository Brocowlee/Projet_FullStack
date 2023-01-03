import {useState, useEffect} from "react";
import axios from "axios";

export const ShowPosts = ({id_thread, id_post, titre, contenu, createur, date}) => {

    let id_createur = createur;

    const [user, setUser] = useState([]);

    useEffect(() => {
        (async () => {

            // On essaye de faire la requête pour récupérer l'utilisateur

            try {
                const response = await axios.get(`/api/user/${id_createur}`);


                // On met à jour l'utilisateur
                setUser(response.data[0].pseudo);
            }

                // Si on attrape une erreur alors on montre un message d'erreur et on met que l'utilisateur est non défini
            catch (e) {
                showErrorMessage("Il y a eu une erreur lors de la récupération de l'utilisateur", e.response.data);
            }

        })()
    }, );



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
        </div>
    )
}