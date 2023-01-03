import {Button, Form} from "react-bulma-components";
import {useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";

/**
 * Le composant pour que l'utilisateur se connecte
 * @param showErrorMessage Fonction pour montrer un message d'erreur
 * @param showInfoMessage Fonction pour montrer un message d'information
 */
export const LoginForm = ({showErrorMessage, showInfoMessage}) => {

    /**
     * On récupère le router de NextJS
     */
    const router = useRouter();

    /**
     * Les données pour la connection de l'utilisateur
     */
    const [connectionData, setConnectionData] = useState({
        login: "",
        password: "",
    })

    /**
     * Fonction utilisée pour mettre à jour les champs
     * @param e L'événement
     */
    const updateField = (e) => {
        setConnectionData({
            ...connectionData,
            [e.target.name]: e.target.value
        });
    }

    /**
     * Fonction pour connecter l'utilisateur
     * @param event L'événement du click du button
     */
    const logUserIn = async (event) => {

        // On fait en sorte que l'événement par défaut ne se déclanche pas
        event.preventDefault();

        // Nous vérifions d'abord que tous les champs ont été remplis, sinon nous affichons un message
        for (const key in connectionData) {
            if (connectionData[key] === '') {
                return showErrorMessage(`Une ou plusieurs valeur de connexion n'a pas été remplie`, "Veuillez recommencer");
            }
        }

        // On essaye de connecter l'utilisateur
        try {
            const response = await axios.get('/api/login', {
                auth: {

                    // On n'oublie pas de trim (enlever les espaces avant et après de la chaine de caractères)
                    username: connectionData.login.trim(),

                    // On hash le mot de passe en sha256 pour la sécurité !
                    password: connectionData.password
                }
            });

            // Comme on est arrivé là, c'est que la connexion a fonctionné et on peut donc rediriger l'utilisateur vers la page de compte en montrant un message
            showInfoMessage("Vous vous êtes connecté avec succès");
            router.replace("/");
        }

            // Si on attrape une erreur alors on montre un message d'erreur
        catch (e) {
            showErrorMessage("Il y a eu une erreur lors de la connexion de l'utilisateur", e.response.data);
        }
    }

    /**
     * Fonction qui s'exécute si un utilisateur appuie sur la touche entrée (pour que ça soit plus rapide que de cliquer sur le bouton de connexion)
     * @param event L'événement
     */
    const handleKeyDown = (event) => {

        // La touche 13 est la touche "entrer"
        if (event.keyCode === 13 && event.shiftKey === false) {
            logUserIn(event);
        }
    }

    return (
        <form>
            <Form.Field>
                <Form.Control>
                    <Form.Input name="login" className="is-medium" type="text"
                                placeholder="Login" onKeyDown={handleKeyDown}
                                onChange={updateField} value={connectionData.login} autoComplete="login"/>
                </Form.Control>
            </Form.Field>

            <Form.Field>
                <Form.Control>
                    <Form.Input name="password" className="is-medium" type="password"
                                placeholder="Mot de passe" onKeyDown={handleKeyDown} onChange={updateField}
                                value={connectionData.password} autoComplete="current-password"/>
                </Form.Control>
            </Form.Field>

            <Button onClick={logUserIn} className="is-block is-info is-fullwidth is-medium">Se connecter</Button>
            <br/>
			<a href="/newuser">Creer un compte</a> 
        </form>
    )
}