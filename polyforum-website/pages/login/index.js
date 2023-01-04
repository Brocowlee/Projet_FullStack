import {PageWrapper} from "../../components/pageWrapper";
import {Columns, Heading} from "react-bulma-components";
import {LoginForm} from "../../components/users/loginForm";

/**
 * La page pour connecter un utilisateur c'est à dire le "/login"
 * @param showErrorMessage Fonction pour montrer un message d'erreur
 * @param showInfoMessage Fonction pour montrer un message d'information
 */
const LoginPage = ({showErrorMessage, showInfoMessage}) => {

    return (
        <PageWrapper>
            <Columns.Column className="is-4 is-offset-4 polyforum-bigger">
                <Columns>
                    <Columns.Column className="right has-text-centered">
                        <Heading className="is-3">Connexion</Heading>
                        <LoginForm showErrorMessage={showErrorMessage} showInfoMessage={showInfoMessage}/>
                    </Columns.Column>
                </Columns>
            </Columns.Column>
        </PageWrapper>
    );
}

export default LoginPage;