import {Button, Form, Heading} from "react-bulma-components";
import {useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";

/**
 * Le composant pour créer un utilisateur
 * @param showErrorMessage Fonction pour montrer un message d'erreur
 * @param showSuccessMessage Fonction pour montrer un message de succès
 */
export const ThreadCreationForm = ({showErrorMessage, showSuccessMessage}) => {

    /**
     * On récupère le router de NextJS
     */
    const router = useRouter();

    /**
     * Les données pour la création d'un compte utilisateur
     */
    const [newThreadData, setNewThreadData] = useState({
        titre: "",
        description: "",
        limite_age: ""
    })

    /**
     * Fonction utilisée pour mettre à jour les champs, soit le type d'input est une checkbox où alors la valeur sera stockée dans l'attribut checked et non value
     * @param e L'événement
     */
    const updateField = (e) => {
        setNewThreadData({
            ...newThreadData,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        });
    }

    /**
     * Fonction pour créer un thread
     * @param event L'événement du click du button
     */
    const createThread = async (event) => {

        // On fait en sorte que l'événement par défaut ne se déclanche pas
        event.preventDefault();

        // Nous vérifions d'abord que tous les champs ont été remplis, sinon nous affichons un message
        for (const key in newThreadData) {
            if (newThreadData[key] === '') {
                return showErrorMessage(`Une ou plusieurs valeur de connexion n'a pas été remplie`, "Veuillez recommencer");
            }
        }

        // On essaye de créer un thread
        try {
            const response = await axios.post('/api/thread', {
                titre: newThreadData.titre,
                description: newThreadData.description,
                limite_age: newThreadData.limite_age
            });

            showSuccessMessage("Le thread a été créé avec succès.");
            router.replace("/");
        }

        
            // Si on attrape une erreur alors on montre un message d'erreur
        catch (e) {
            showErrorMessage("Il y a eu une erreur lors de la création du thread", e.response.data);
        }
    }

    /**
     * Fonction qui s'exécute si un utilisateur appuie sur la touche entrée (pour que ça soit plus rapide que de cliquer sur le bouter de connexion)
     * @param event L'événement
     */
    const handleKeyDown = (event) => {

        // La touche 13 est la touche "entrer"
        if (event.keyCode === 13 && event.shiftKey === false) {
            createThread(event);
        }
    }

    return (
        <form>

            <Form.Field>
                <Form.Control>
                    <Form.Input name="titre" className="is-medium" type="text"
                                placeholder="Titre" onKeyDown={handleKeyDown}
                                onChange={updateField} value={newThreadData.titre}/>
                </Form.Control>
            </Form.Field>

            <Form.Field>
                <Form.Control>
                    <Form.Input name="description" className="is-medium" type="text"
                                placeholder="Description" onKeyDown={handleKeyDown} onChange={updateField}
                                value={newThreadData.description}/>
                </Form.Control>
            </Form.Field>

            <Form.Field>
                <Form.Control>
                    <Form.Input name="limite_age" className="is-medium" type="number"
                                placeholder="Limite age" onKeyDown={handleKeyDown}
                                onChange={updateField} value={newThreadData.limite_age}/>
                </Form.Control>
            </Form.Field>

            <Button onClick={createThread} className="is-block is-info is-fullwidth is-medium">Créer le thread</Button>
        </form>
    )
}