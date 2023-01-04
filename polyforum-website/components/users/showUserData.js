import {useState, useEffect} from "react";
import {useRouter} from 'next/router';
import axios from "axios";

/**
 * Le composant pour que l'utilisateur se connecte
 * @param id_utilisateur identifiant de l'utilisateur
 * @param showErrorMessage Fonction pour montrer un message d'erreur
 */
export const ShowUserData = ({id_utilisateur, showErrorMessage}) => {

    /**
     * Si la donnée a été récupérée
     */
    const [loaded, setLoaded] = useState(false);

     /**
     * Le lien vers l'api
     */
    const link = `/api/user/${id_utilisateur}`;

    /**
    * Les indormations de l'utilisateur
    */
    const [userData, setUserData] = useState([]);

    /**
    * On récupère le routeur
    */
    const router = useRouter();

     /**
     * date de création
     */
    const [date, setDate] = useState([]);

    useEffect(() => {     

        if(!router.isReady) return;
        (async () => {

            // On veut faire la requête une seule fois
            if (!loaded) {

                try {
                    const response = await axios.get(link);
                    setUserData(response.data[0]);
                    setDate(response.data[0].date_creation_compte.split("T")[0])
                }

                    // Si on attrape une erreur alors on montre un message d'erreur et on met que l'utilisateur est non défini
                catch (e) {
                    showErrorMessage("Il y a eu une erreur lors de la connexion de l'utilisateur", e.response.data);
                }

                // On dit que la donnée est mise à jour
                setLoaded(true);
            }
        })()
    }, [router.isReady]);

   
    if(userData == undefined){
        return (
            <span><b>Cet utilisateur n'existe pas</b></span>
        )
    }


    return (
        <div>
            <div className="account-row">
                
                <div className="account-column">
                    <div className="account-column">
                        <span><b>Pseudo : </b>{userData.pseudo}</span>
                    </div>
                </div>
                  
            </div>

            <div className="account-row">
                <div className="account-column">
                    <div className="account-column">
                        <span><b>Age : </b>{userData.age}</span>
                    </div>
                </div>
            </div>

            <div className="account-row">    
                <div className="account-column">
                        <div className="account-column">
                            <span><b>Mana : </b>{userData.mana}</span>
                        </div>
            </div>

            </div>

            <div className="account-row">
                <div className="account-column">
                    <div className="account-column">
                        <span><b>Date de création du compte : </b>{date}</span>
                    </div>
                </div>            
            </div>



           

        </div>


    )
}