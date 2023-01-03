import {PageWrapper} from "../../components/pageWrapper";
import {Columns, Heading} from "react-bulma-components";
import {ShowPosts} from "../../components/showPosts";
import {useState, useEffect} from "react";
import {Button} from "react-bulma-components";
import {useRouter} from 'next/router';
import {CustomPuffLoader} from "../../components/customPuffLoader";
import ProtectedRoute from "../../components/protectedRoute";
import axios from "axios";

const ThreadPage = () => {

  const [posts, setPosts] = useState([]);
  
  const router = useRouter();
    /**
    * l'id du thread
    */
    let thread = router.query.idThread;

    /**
     * Si la donnée a été récupérée
     */
    const [loaded, setLoaded] = useState(false);

    const link = `/api/thread/${thread}`;

    useEffect(() => {
      if(!router.isReady) return;
      

        (async () => {

            // On veut faire la requête une seule fois
            if (!loaded) {

                try {
                    const response = await axios.get(link);

                    setPosts(response.data);
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


    // Si la donnée n'a pas encore été récupérée on montre le loader
    if (!loaded) {
      return <CustomPuffLoader/>
    }

    // Si l'utilisateur n'est pas défini ça veut dire qu'il n'existe pas et donc on veut revenir à la page des utilisateurs
    if (posts === undefined) {
      router.replace("/");
      return null;
    }
  

    if(posts == "" || posts == undefined){
      return (
        <PageWrapper>
          <Columns.Column className="is-full posts-list">
          <a href={'/newpost/' + thread}><Button className="is-block is-info is-fullwidth is-medium">Créer un poste</Button></a>
            <br></br>
            <Heading className="is-3">Il n'y a aucun poste pour le moment</Heading>

          </Columns.Column>
        </PageWrapper> 
      );
    } else {
      return (
        <PageWrapper>
          <Columns.Column className="is-full posts-list">
            <Heading className="is-1 center"><b>{posts.thread[0].titre}</b></Heading>
            <br></br>
            <a href={'/newpost/' + thread}><Button className="is-block is-info is-fullwidth is-medium">Créer un poste</Button></a>
            <br></br>
            <Heading className="is-3">Liste des postes :</Heading>
            <hr />
  
              {

              posts.posts.sort((a, b) => {
                if (a.date_thread > b.date_thread) return -1;
                if (a.date_thread < b.date_thread) return 1;
                return 0;
              }).map((post) => (
                  <ShowPosts
                  key={post.id_post}
                  id_thread={thread}
                  id_post={post.id_post}
                  titre={post.titre}
                  contenu={post.contenu_post}
                  createur={post.id_utilisateur}
                  date={post.date_post.split("T")[0]}
                />
              ))}
          </Columns.Column>
        </PageWrapper> 
      );
    }

   
  };

// On exporte la page
export default ProtectedRoute(ThreadPage, false);