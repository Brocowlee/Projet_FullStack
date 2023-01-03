import {PageWrapper} from "../../components/pageWrapper";
import {Columns, Heading} from "react-bulma-components";
import {ThreadCreationForm} from "../../components/threadCreationForm";
import ProtectedRoute from "../../components/protectedRoute";

/**
 * La page pour créer un nouvau thread, c'est à dire le '/newthread'
 * @param showErrorMessage Fonction pour montrer un message d'erreur
 * @param showSuccessMessage Fonction pour montrer un message de succès
 */
const NewThreadPage = ({showErrorMessage, showSuccessMessage}) => {
    return (
        <PageWrapper>
            <Columns.Column className="is-8 is-offset-2 tp-notification">
                <Heading className="is-3 center">Créer un thread</Heading>
                <hr/>
                <ThreadCreationForm showErrorMessage={showErrorMessage} showSuccessMessage={showSuccessMessage}/>
            </Columns.Column>
        </PageWrapper>
    )
}

export default ProtectedRoute(NewThreadPage, false);