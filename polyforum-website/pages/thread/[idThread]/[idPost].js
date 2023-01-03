import {PageWrapper} from "../../../components/pageWrapper";
import {Columns, Heading, TextField} from "react-bulma-components";
import {ShowMessages} from "../../../components/showMessages";
import {useState, useEffect} from "react";
import {Button} from "react-bulma-components";
import Form from 'react-bootstrap/Form';
import {useRouter} from 'next/router';
import {CustomPuffLoader} from "../../../components/customPuffLoader";
import ProtectedRoute from "../../../components/protectedRoute";
import axios from "axios";

const PostPage = () => {

  const [messages, setMessages] = useState([]);
  
  const router = useRouter();

    /**
    * l'id du thread
    */
    let thread = router.query.idThread;

    let post = router.query.idPost;

    /**
     * Si la donnée a été récupérée
     */
    const [loaded, setLoaded] = useState(false);

    const [user_id, setUserId] = useState([]);

    const [thread_title, setThreadTitle] = useState([]);

    const [postdata, setPostData] = useState([]);

    const [userData, setUserData] = useState([]);

    const [newMessageData, setNewMessageData] = useState({
      contenu_message: "",
      id_utilisateur: "",
      id_post: ""
    })

    const link = `/api/thread/${thread}/${post}`;

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
      if(!router.isReady) return;
      

        (async () => {

            // On veut faire la requête une seule fois
            if (!loaded) {

                // On essaye de faire la requête pour récupérer l'utilisateur

                try {

                    const response_user = await axios.get(`/api/userdata`);
                    setUserId(response_user.data[0].id_utilisateur);

                    const response_thread = await axios.get(`/api/thread/` + thread);
                    setThreadTitle(response_thread.data.thread[0].titre);

                    const response = await axios.get(link);
                    
                    setMessages(response.data.messages);

                    setPostData(response.data.post[0]);

                    
                                  }

                    // Si on attrape une erreur alors on montre un message d'erreur et on met que l'utilisateur est non défini
                catch (e) {
                    showErrorMessage("Il y a eu une erreur lors de la récupération de l'utilisateur", e.response.data);
                }

                // On dit que la donnée est mise à jour
                setLoaded(true);
            }
        })()
    }, [loaded, router.isReady]);

    useEffect(() => {

      if(!router.isReady) return;

        if(postdata.id_utilisateur == undefined) return;

          console.log(postdata.id_utilisateur);
          (async () => {

            try {

              const response_user_data = await axios.get(`/api/user/${postdata.id_utilisateur}`);
              setUserData(response_user_data.data[0]);
              


            }catch(e){

            }

        })()
    }, [loaded, router.isReady]);


    // Si la donnée n'a pas encore été récupérée on montre le loader
    if (!loaded) {
      return <CustomPuffLoader/>
    }

    // Si l'utilisateur n'est pas défini ça veut dire qu'il n'existe pas et donc on veut revenir à la page des utilisateurs
    if (messages === undefined) {
      router.replace("/");
      return null;
    }

    newMessageData.id_utilisateur = user_id;
    newMessageData.id_post = post;

    const createMessage = async () => {

       // On essaye de créer un message
       try {
        const response = await axios.post(link, {
            contenu_message: newMessageData.contenu_message,
            id_utilisateur: newMessageData.id_utilisateur,
            id_post: newMessageData.id_post
        });

        showSuccessMessage("Le message a été envoyé avec succès.");
    }

    
        // Si on attrape une erreur alors on montre un message d'erreur
    catch (e) {
        showErrorMessage("Il y a eu une erreur lors de la création du thread", e.response.data);
    }

    }
    
    if(messages == "" || messages == undefined){
      return (
        <PageWrapper>
          <Columns.Column className="is-full posts-list">  
          <Heading className="is-1 center"><b>{thread_title}</b></Heading>        
          <br></br>

            <div className="postdata">
              <div className="postdata-row">
                  
                  <div className="postdata-column">
                      <div className="postdata-column">
                          <span><b>Post : </b>{postdata.titre}</span>
                      </div>
                  </div>
                    
              </div>

              <div className="postdata-row">
                  <div className="postdata-column">
                      <div className="postdata-column">
                          <span><b>Contenu :  </b>{postdata.contenu_post}</span>
                      </div>
                  </div>
              </div>

              <div className="postdata-row">    
                  <div className="postdata-column">
                          <div className="postdata-column">
                              <span><b>Date de création : </b>{postdata.date_post.split("T")[0]}</span>
                          </div>
              </div>

              </div>

              <div className="postdata-row">
                  <div className="postdata-column">
                      <div className="postdata-column">
                          <span><b>Créateur : <a href={"/user/" + postdata.id_utilisateur}>{userData.pseudo}</a></b></span>
                      </div>
                  </div>            
              </div>
  
        </div>





            <br></br>
          <Heading className="is-3">Il n'y a aucun message dans ce poste pour le moment</Heading>
          <br></br>

          <Form onSubmit={createMessage}>
            <Form.Group controlId="formMessage">
            <Form.Control as="textarea" placeholder="Ecrire un message" style={{ width: "100%", resize: "none" }} onChange={updateField} value={newMessageData.contenu_message}  rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>   
          

          <br></br>

          </Columns.Column>
        </PageWrapper> 
      );
    } else {
      return (
        <PageWrapper>
          <Columns.Column className="is-full posts-list">
          <Heading className="is-1 center"><b>{thread_title}</b></Heading> 
            <br></br>

            <div className="postdata">
              <div className="postdata-row">
                  
                  <div className="postdata-column">
                      <div className="postdata-column">
                          <span><b>Post : </b>{postdata.titre}</span>
                      </div>
                  </div>
                    
              </div>

              <div className="postdata-row">
                  <div className="postdata-column">
                      <div className="postdata-column">
                          <span><b>Contenu :  </b>{postdata.contenu_post}</span>
                      </div>
                  </div>
              </div>

              <div className="postdata-row">    
                  <div className="postdata-column">
                          <div className="postdata-column">
                              <span><b>Date de création : </b>{postdata.date_post.split("T")[0]}</span>
                          </div>
              </div>

              </div>

              <div className="postdata-row">
                  <div className="postdata-column">
                      <div className="postdata-column">
                          <span><b>Créateur : <a href={"/user/" + postdata.id_utilisateur}>{userData.pseudo}</a></b></span>
                      </div>
                  </div>            
              </div>
  
        </div>

            <br></br>
            <Heading className="is-3">Liste des messages</Heading>
            <hr />
  
              {

              messages.map((message) => (
                  <ShowMessages
                  key={message.id_message}
                  id_message = {message.id_message}
                  id_post = {post}
                  id_thread = {thread}
                  contenu_message={message.contenu_message}
                  createur={message.id_utilisateur}
                  date={message.date_message.split("T")[0]}
                  lien={message.id_message_lien}
                />
              ))}
            <br></br>
            <Form onSubmit={createMessage}>
              <Form.Group controlId="formMessage">
              <Form.Control as="textarea" placeholder="Ecrire un message" style={{ width: "100%", resize: "none" }} onChange={updateField} value={newMessageData.contenu_message}  rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>   


          
          </Columns.Column>
        </PageWrapper> 
      );
    }

   
  };

// On exporte la page
export default ProtectedRoute(PostPage, false);