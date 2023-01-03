
export const ShowThreads = ({id_thread, titre, description, age, date}) => {

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
        </div>
    )
}