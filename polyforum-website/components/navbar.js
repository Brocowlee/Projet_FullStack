import {Navbar as BulmaNavbar} from 'react-bulma-components'
import React, {useEffect, useState} from 'react'
import Link from "next/link";
import {checkIfUserLogged} from "../utils/utils";
import axios from "axios";

/**
 * La navbar
 * @param router Le router de NextJS
 */
export const Navbar = ({router}) => {

    /**
     * Si le burger de la barre de navigation est actif (pour les mobiles)
     */
    const [isActive, setIsActive] = useState(false);

    /**
     * Si l'utilisateur est connecté
     */
    const [isUserLogged, setIsUserLogged] = useState(false);

    /**
     * Si l'utilisateur est un "super utilisateur"
     */
    const [isSuperUser, setIsSuperUser] = useState(false);

    /**
     * Utilisé pour savoir si la page a changé (pour mettre à jour la navbar)
     */
    const [lastPage, setLastPage] = useState(router === null ? undefined : router.pathname);

    /**
     * useEffect utilisé pour vérifier si la page a changé pour savoir si l'utilisateur est toujours connecté
     */
    useEffect(() => {
        if (router !== null && router.pathname !== lastPage) {
            setLastPage(router.pathname)
        }
    })

    const [user_id, setUserId] = useState([]);
    
    useEffect(() => {
        (async () => {

            const response = await axios.get(`/api/userdata`);
            setUserId(response.data[0].id_utilisateur);

        })()
    }, );

    /**
     * useEffect pour savoir si l'utilisateur est toujours connecté et pour mettre à jour la barre de navigation en conséquence.
     */
    useEffect(() => {
        (async () => {

            // Si l'utilisateur semble être connecté, nous vérifions auprès du serveur si l'utilisateur est réellement connecté.
            try {
                const isUserLoggedData = await checkIfUserLogged();

                // Si la requête est un succès alors on peut mettre la réponse de si l'utilisateur est connecté et s'il est un "super utilisateur"
                setIsUserLogged(isUserLoggedData.isUserLogged);
                setIsSuperUser(isUserLoggedData.isSuperUser);
            }

                // Si on attrape une erreur alors on met que l'utilisateur n'est ni connecté, ni un "super utilisateur"
            catch (e) {
                setIsUserLogged(false);
                setIsSuperUser(false);
            }
        })();
    }, [lastPage]);

    return (
        <BulmaNavbar active={isActive} className="isFixed">
            <div className="container">
                <BulmaNavbar.Brand>
                    <BulmaNavbar.Burger onClick={() => setIsActive(!isActive)}/>
                </BulmaNavbar.Brand>
                <BulmaNavbar.Menu>
				
                    <BulmaNavbar.Container>
                        <BulmaNavbar.Item renderAs="span">
                            <Link href="/" passHref>
                                PolyForum
                            </Link>
                        </BulmaNavbar.Item>

                        {isUserLogged ?
                            <>
                                <BulmaNavbar.Item renderAs="span">
                                    <Link href="/newthread" passHref>
                                        Creer un Thread
                                    </Link>
                                </BulmaNavbar.Item>

                            </> : null
						}
							
							
							
                    </BulmaNavbar.Container>

                    <div className="navbar-end">

                        {isUserLogged ?
                            <>
                                <BulmaNavbar.Item renderAs="a" className="has-dropdown is-hoverable">
								
                                    <BulmaNavbar.Link>
                                        <BulmaNavbar.Item renderAs="span">
                                            <Link href={"/user/" + user_id} passHref>
                                                Compte utilisateur
                                            </Link>
                                        </BulmaNavbar.Item>
                                    </BulmaNavbar.Link>
									
                                    <BulmaNavbar.Dropdown>
                                        <BulmaNavbar.Item renderAs="span">
                                            <Link href="/logout" passHref>
                                                Déconnexion
                                            </Link>
                                        </BulmaNavbar.Item>
                                    </BulmaNavbar.Dropdown>
                               
							   </BulmaNavbar.Item>
                            </>
                            :
							
                            <BulmaNavbar.Item renderAs="span">
                                <Link href="/login" passHref>
                                    Connexion
                                </Link>
                            </BulmaNavbar.Item>
                        }
                    </div>
                </BulmaNavbar.Menu>
            </div>
        </BulmaNavbar>
    )
}