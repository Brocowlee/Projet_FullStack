import {useState, useEffect} from "react";
import {useRouter} from 'next/router';
import axios from "axios";

export const ShowUserData = ({id_utilisateur}) => {

    /**
     * Si la donnée a été récupérée
     */
    const [loaded, setLoaded] = useState(false);

    const link = `/api/user/${id_utilisateur}`;

    const [userData, setUserData] = useState([]);

    const router = useRouter();

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