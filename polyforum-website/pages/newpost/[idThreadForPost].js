import {PageWrapper} from "../../components/pageWrapper";
import {Columns, Heading} from "react-bulma-components";
import {PostCreationForm} from "../../components/postCreationForm";
import {useState, useEffect} from "react";
import {useRouter} from 'next/router';
import ProtectedRoute from "../../components/protectedRoute";
import axios from "axios";

/**
 * La page pour créer un nouvau post, c'est à dire le '/newpost'
 * @param showErrorMessage Fonction pour montrer un message d'erreur
 * @param showSuccessMessage Fonction pour montrer un message de succès
 */
const NewPostPage = ({showErrorMessage, showSuccessMessage}) => {

    const router = useRouter();

    const [user_id, setUserId] = useState([]);
    let thread_id = router.query.idThreadForPost;
    
    useEffect(() => {
        (async () => {

            const response = await axios.get(`/api/userdata`);
            setUserId(response.data[0].id_utilisateur);

        })()
    }, []);
    

    return (
        <PageWrapper>
            <Columns.Column className="is-8 is-offset-2 tp-notification">
                <Heading className="is-3 center">Créer un Post</Heading>
                <hr/>

                <PostCreationForm id_utilisateur_received={user_id} id_thread_received={thread_id} showErrorMessage={showErrorMessage} showSuccessMessage={showSuccessMessage}/>
            </Columns.Column>
        </PageWrapper>
    )
}

export default ProtectedRoute(NewPostPage, false);