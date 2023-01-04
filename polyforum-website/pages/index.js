import {PageWrapper} from "../components/pageWrapper";
import {Columns, Heading} from "react-bulma-components";
import {ShowThreads} from "../components/showThreads";
import {useState, useEffect} from "react";
import ProtectedRoute from "../components/protectedRoute";
import axios from "axios";

/**
 * Page principale du projet
 * @param showErrorMessage Fonction pour montrer un message d'erreur
 * @param showInfoMessage Fonction pour montrer un message d'information
 * @param showSuccessMessage Fonction pour montrer un message de succès
 */
const IndexPage = ({showErrorMessage, showInfoMessage, showSuccessMessage}) => {
    const [threads, setThreads] = useState([]);
  
    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axios.get('/api/thread');
          setThreads(response.data);
        } catch (error) {
          console.error(error);
        }
      }
  
      getData();
    }, []);

    return (
        <PageWrapper>
          <Columns.Column className="is-full threads-list">
            <Heading className="is-1 center"><b>PolyForum</b></Heading>  
            <Heading className="is-3">Liste des threads</Heading>
            <hr />
    
            {threads.sort((a, b) => {
              if (a.date_thread > b.date_thread) return -1;
              if (a.date_thread < b.date_thread) return 1;
              return 0;
            }).map((thread) => (
              <ShowThreads
                key={thread.id_thread}
                id_thread={thread.id_thread}
                titre={thread.titre}
                description={thread.description}
                age={thread.limite_age}
                date={thread.date_thread.split("T")[0]}
                showErrorMessage={showErrorMessage}
                showSuccessMessage={showSuccessMessage}
              />
            ))}
          </Columns.Column>
        </PageWrapper>
      );
    };

// On exporte la page
export default ProtectedRoute(IndexPage, false);