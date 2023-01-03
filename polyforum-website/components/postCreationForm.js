import {Button, Form} from "react-bulma-components";
import {useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";

/**
 * Le composant pour créer un post
 * @param showErrorMessage Fonction pour montrer un message d'erreur
 * @param showSuccessMessage Fonction pour montrer un message de succès
 */
export const PostCreationForm = ({id_utilisateur_received, id_thread_received, showErrorMessage, showSuccessMessage}) => {

    /**
     * On récupère le router de NextJS
     */
    const router = useRouter();

    /**
     * Les données pour la création d'un compte utilisateur
     */
    const [newPostData, setNewPostData] = useState({
        titre: "",
        contenu_post: "",
        id_thread: "",
        id_utilisateur: ""
    })

    newPostData.id_thread = id_thread_received;
    newPostData.id_utilisateur = id_utilisateur_received;

    console.log(newPostData.id_thread)

    /**
     * Fonction utilisée pour mettre à jour les champs, soit le type d'input est une checkbox où alors la valeur sera stockée dans l'attribut checked et non value
     * @param e L'événement
     */
    const updateField = (e) => {
        setNewPostData({
            ...newPostData,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        });
    }

    /**
     * Fonction pour créer un post
     * @param event L'événement du click du button
     */
    const createPost = async (event) => {

        // On fait en sorte que l'événement par défaut ne se déclanche pas
        event.preventDefault();

        // Nous vérifions d'abord que tous les champs ont été remplis, sinon nous affichons un message
        for (const key in newPostData) {
            if (newPostData[key] === '') {
                return showErrorMessage(`Une ou plusieurs valeur de connexion n'a pas été remplie`, "Veuillez recommencer");
            }
        }

        // On essaye de créer un post

        let link = '/api/thread/' + id_thread_received;

        try {
            const response = await axios.post(link, {
                titre: newPostData.titre,
                contenu_post: newPostData.contenu_post,
                id_thread: newPostData.id_thread,
                id_utilisateur: newPostData.id_utilisateur
            });

            showSuccessMessage("Le post a été créé avec succès.");
            router.replace("/thread/" + id_thread_received);
        }

        
            // Si on attrape une erreur alors on montre un message d'erreur
        catch (e) {
            showErrorMessage("Il y a eu une erreur lors de la création du post", e.response.data);
        }
    }

    /**
     * Fonction qui s'exécute si un utilisateur appuie sur la touche entrée (pour que ça soit plus rapide que de cliquer sur le bouter de connexion)
     * @param event L'événement
     */
    const handleKeyDown = (event) => {

        // La touche 13 est la touche "entrer"
        if (event.keyCode === 13 && event.shiftKey === false) {
            createPost(event);
        }
    }

    

    return (
        <form>

            <Form.Field>
                <Form.Control>
                    <Form.Input name="titre" className="is-medium" type="text"
                                placeholder="Nom du post" onKeyDown={handleKeyDown}
                                onChange={updateField} value={newPostData.titre}/>
                </Form.Control>
            </Form.Field>

            <Form.Field>
                <Form.Control>
                    <Form.Input name="contenu_post" className="is-medium" type="text"
                                placeholder="Contenu" onKeyDown={handleKeyDown} onChange={updateField}
                                value={newPostData.contenu_post}/>
                </Form.Control>
            </Form.Field>

            <Button onClick={createPost} className="is-block is-info is-fullwidth is-medium">Créer le thread</Button>
        </form>
    )
}