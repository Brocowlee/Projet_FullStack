import {useState, useEffect} from "react";
import {Button} from "react-bulma-components";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import $ from 'jquery';

export const ShowMessages = ({id_message,id_post,id_thread,contenu_message, createur, date, lien}) => {       

    let id_createur = createur;

    const [showCreateMessage, setShowCreateMessage] = useState(false);
    let ShowLien = false;
    const [user, setUser] = useState([]);
    const [userResponse, setUserResponse] = useState([]);
    const [mana, setMana] = useState([]);
    const link = `/api/thread/${id_thread}/${id_post}`;

    /**
     * Si la donnée a été récupérée
     */
    const [loaded, setLoaded] = useState(false);

    const [newMessageData, setNewMessageData] = useState({
        contenu_message: "",
        id_utilisateur: "",
        id_post: "",
        id_message_lien: ""
    })
    
    if(lien != null){
        ShowLien = true;
    };

    /**
       * Fonction utilisée pour mettre à jour les champs
       * @param e L'événement
       */
    const updateField = (e) => {
        setNewMessageData({
            ...newMessageData,
            contenu_message: event.target.value
        });
    }

    useEffect(() => {
        (async () => {
            if (!loaded) {
                // On essaye de faire la requête pour récupérer l'utilisateur

                try {
                    const response = await axios.get(`/api/user/${id_createur}`);

                    // On met à jour l'utilisateur
                    setUser(response.data[0].pseudo);
                    setMana(response.data[0].mana);

                    const response_user = await axios.get(`/api/userdata`);
                    setUserResponse(response_user.data[0].id_utilisateur);
                }
                    // Si on attrape une erreur alors on montre un message d'erreur et on met que l'utilisateur est non défini
                catch (e) {
                    showErrorMessage("Il y a eu une erreur lors de la récupération de l'utilisateur", e.response.data);
                }

                setLoaded(true);
            }

        })()
    }, [loaded]);

    newMessageData.id_utilisateur = userResponse;
    newMessageData.id_post = id_post;
    newMessageData.id_message_lien = id_message;
    
    

    const createMessage = async () => {
         // On essaye de créer un message
        try {
         const response = await axios.post(link, {
             contenu_message: newMessageData.contenu_message,
             id_utilisateur: newMessageData.id_utilisateur,
             id_post: newMessageData.id_post,
             id_message_lien: newMessageData.id_message_lien
         });         

     }
 
     
         // Si on attrape une erreur alors on montre un message d'erreur
     catch (e) {
         showErrorMessage("Il y a eu une erreur lors de la création du thread", e.response.data);
     }
    }

    const redirect = async () => {
       
        $('html, body').animate({
            scrollTop: $("#" + lien).offset().top - 450
         }, 1750, function() {
            $("#" + lien).addClass('highlight');
            setTimeout(function() {
                $("#" + lien).removeClass('highlight');
              }, 500);
          });



    }
   
    return (
        
        

        <div className="messageforum">
            <div id={id_message} className="messageforum-row">
            
                <div className="messageforum-column border-right">
                    <div className="messageforum-column">
                        <a href={"/user/" + id_createur}><span><b>{user}</b></span></a>
                    </div>
                    <div className="messageforum-column">
                        <span>Mana : {mana}</span>
                    </div>
                    <div className="messageforum-column-2">
                        <span>{date}</span>
                    </div>
                </div>
                

                <div className="messageforum-column">
                    {ShowLien && (
                        <div className="messageforum-column-reponse">
                            <a onClick={redirect}><h4>Reponse au message #{lien}</h4></a>
                        </div>
                    )}

                    <div className="messageforum-column">
                        <h4>{contenu_message}</h4>
                    </div>

                    <div className="messageforum-column-3">
                        <Button className="is-block is-info is-small" onClick={() => setShowCreateMessage(!showCreateMessage)}>Repondre</Button>
                    </div>
                    
                    <div className="messageforum-column-4">
                        <h4>#{id_message}</h4>
                    </div>

                </div>
            </div>
            <br></br>
            {showCreateMessage && (
            <div>
                <Form onSubmit={createMessage}>
                    <Form.Group controlId="formMessage">
                    <Form.Control as="textarea" placeholder="Ecrire un message" style={{ width: "100%", resize: "none" }} onChange={updateField} value={newMessageData.contenu_message}  rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>   
            </div>
            )}
            

        </div>
    )
}