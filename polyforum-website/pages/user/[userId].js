import {PageWrapper} from "../../components/pageWrapper";
import {Columns, Heading} from "react-bulma-components";
import {ShowUserData} from "../../components/users/showUserData";
import {useRouter} from 'next/router';

/**+
 * La page pour afficher les informations d'un utilisateur
 * @param showErrorMessage Fonction pour montrer un message d'erreur
 * @param showSuccessMessage Fonction pour montrer un message de succès
 */
const UserPage = ({showErrorMessage, showSuccessMessage}) => {

    const router = useRouter();

    const user_id = router.query.userId;

    if(!router.isReady) return;

    return (
        <PageWrapper>
            <Columns.Column className="is-8 is-offset-2 tp-notification">
            <ShowUserData id_utilisateur={user_id}/>
            </Columns.Column>
        </PageWrapper>
    )
}

// On exporte la page
export default UserPage;