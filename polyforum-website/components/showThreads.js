import {Button} from "react-bulma-components";
import {useRouter} from 'next/router';
import {useState, useEffect} from "react";
import axios from "axios";

export const ShowThreads = ({id_thread, titre, description, age, date, showErrorMessage, showSuccessMessage}) => {

    const router = useRouter();

    let showDeleteThread = false;
    const [admin, setadmin] = useState([]);

    const [userResponse, setUserResponse] = useState([]);
    const [user, setUser] = useState([]);

    /**
     * Si la donnée a été récupérée
     */
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(!router.isReady) return;
        (async () => {
            if (!loaded) {

                // On essaye de faire la requête pour récupérer l'utilisateur

                try {
                    const response_user = await axios.get(`/api/userdata`);
                    setUserResponse(response_user.data[0].id_utilisateur);
                    setadmin(response_user.data[0].admin);

                }

                    // Si on attrape une erreur alors on montre un message d'erreur et on met que l'utilisateur est non défini
                catch (e) {
                    showErrorMessage("Il y a eu une erreur lors de la récupération de l'utilisateur", e.response.data);
                }

                setLoaded(true);
            }

        })()
    }, [loaded, router.isReady]);



    useEffect(() => {
        if(!router.isReady) return;
        if(userResponse == "") return;

        (async () => {
        
                const link_super = `/api/isSuperUserThread/${userResponse}/${id_thread}`;
                
                const response = await axios.get(link_super);
                    // On met à jour l'utilisateur
                    setUser(response.data[0]);
                }
            )()
        }, [loaded, router.isReady]);
    
    if(user != undefined){
        if(user.admin == 1){
            showDeleteThread = true;
        }
    }
    
    if(admin == 1){
        showDeleteThread = true;
    }


    const deleteThread = async () => {

        const link_delete = `/api/thread/${id_thread}`;
        try {

            axios.delete(link_delete, {
                id_thread: id_thread
            });

            window.location.reload();
            showSuccessMessage("Vous avec supprimé le thread avec succès");
        }
        
            // Si on attrape une erreur alors on montre un message d'erreur
        catch (e) {
            console.log(e.message());
           showErrorMessage("Il y a eu une erreur lors de la supression du thread", e.response);
        }


    } 

    return (
        
        <div className="subforum">
            
            <a href={"/thread/" + id_thread}>
                    <div className="subforum-row">
                        <div className="subforum-column">
                        <h4>{titre}</h4>
                    </div>
                    <div className="subforum-column">
                        <h4>{description}</h4>

                    </div>
                    <div className="subforum-column">
                        <span>{age}</span>
                    </div>
                    <div className="subforum-column">
                        <span>{date}</span>
                    </div>
            
                </div>
            </a>
            {showDeleteThread && (
                     <div className="subforum-delete">
                        <Button className="is-block is-danger is-small" onClick={deleteThread} >Supprimer</Button>
                    </div>
            )}
        </div>
    )
}