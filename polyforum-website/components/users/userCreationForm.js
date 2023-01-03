import {Button, Form, Heading} from "react-bulma-components";
import {useState} from "react";
import sha256 from "crypto-js/sha256";
import axios from "axios";

/**
 * Le composant pour créer un utilisateur
 * @param showErrorMessage Fonction pour montrer un message d'erreur
 * @param showSuccessMessage Fonction pour montrer un message de succès
 */
export const UserCreationForm = ({showErrorMessage, showSuccessMessage}) => {

    /**
     * Les données pour la création d'un compte utilisateur
     */
    const [newUserAccountData, setNewUserAccountData] = useState({
        login: "",
        password: "",
        age: ""
    })

    /**
     * Fonction utilisée pour mettre à jour les champs, soit le type d'input est une checkbox où alors la valeur sera stockée dans l'attribut checked et non value
     * @param e L'événement
     */
    const updateField = (e) => {
        setNewUserAccountData({
            ...newUserAccountData,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        });
    }

    /**
     * Fonction pour créer un compte utilisateur
     * @param event L'événement du click du button
     */
    const signUserUp = async (event) => {

        // On fait en sorte que l'événement par défaut ne se déclanche pas
        event.preventDefault();

        // Nous vérifions d'abord que tous les champs ont été remplis, sinon nous affichons un message
        for (const key in newUserAccountData) {
            if (newUserAccountData[key] === '') {
                return showErrorMessage(`Une ou plusieurs valeur de connexion n'a pas été remplie`, "Veuillez recommencer");
            }
        }

        // On essaye de créer un compte utilisateur
        try {
            const response = await axios.post('/api/user', {
                pseudo: newUserAccountData.login,
                mdp: newUserAccountData.password,
                age: newUserAccountData.age
            });

            // Comme on est arrivé là, c'est que la création a fonctionné et on peut donc loe dire à l'utilisateur
            showSuccessMessage("Le compte a été créé avec succès.");
        }

            // Si on attrape une erreur alors on montre un message d'erreur
        catch (e) {
            showErrorMessage("Il y a eu une erreur lors de la création de l'utilisateur", e.response.data);
        }
    }

    /**
     * Fonction qui s'exécute si un utilisateur appuie sur la touche entrée (pour que ça soit plus rapide que de cliquer sur le bouter de connexion)
     * @param event L'événement
     */
    const handleKeyDown = (event) => {

        // La touche 13 est la touche "entrer"
        if (event.keyCode === 13 && event.shiftKey === false) {
            signUserUp(event);
        }
    }

    return (
        <form>

            <Form.Field>
                <Form.Control>
                    <Form.Input name="login" className="is-medium" type="text"
                                placeholder="Login" onKeyDown={handleKeyDown}
                                onChange={updateField} value={newUserAccountData.login} autoComplete="login"/>
                </Form.Control>
            </Form.Field>

            <Form.Field>
                <Form.Control>
                    <Form.Input name="password" className="is-medium" type="password"
                                placeholder="Mot de passe" onKeyDown={handleKeyDown} onChange={updateField}
                                value={newUserAccountData.password} autoComplete="current-password"/>
                </Form.Control>
            </Form.Field>

            <Form.Field>
                <Form.Control>
                    <Form.Input name="age" className="is-medium" type="number"
                                placeholder="Age" onKeyDown={handleKeyDown}
                                onChange={updateField} value={newUserAccountData.age}/>
                </Form.Control>
            </Form.Field>

            <Button onClick={signUserUp} className="is-block is-info is-fullwidth is-medium">Créer le compte utilisateur</Button>
        </form>
    )
}