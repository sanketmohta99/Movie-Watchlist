
import React,{useContext} from 'react'

import { GlobalContext } from '../context/GlobalProvider'



export const MovieControls = ({movie,type}) => {

        const {removeFromWatchlist, addToWatched, addBackToWatchlist,removeFromWatchedlist}= useContext(GlobalContext);

    return (
        <div className="inner-card-controls">
            {type=="watchlist" && (

                <>
                <button className="ctrl-btn" onClick={()=>{ addToWatched(movie) }}>
                    <i className="fa-fw far fa-eye">
                    </i>
                </button>

                <button className="ctrl-btn" onClick={()=> {removeFromWatchlist(movie.id) } }>
                    <i className="fa-fw fa fa-times">
                        
                    </i>
                </button>   

                </>
            )}


            {type==="watched" && (

                    <>
                    <button className="ctrl-btn" onClick={()=>{ addBackToWatchlist(movie) }}>
                    <i className="fa-fw far fa-eye-slash">
                    </i>
                    </button>

                    <button className="ctrl-btn" onClick={()=>{ removeFromWatchedlist(movie.id) }}>
                    <i className="fa-fw fa fa-times">
                    </i>
                    </button>
                    </>
            )}
        </div>
            

    )
}

// export default MovieControls;
