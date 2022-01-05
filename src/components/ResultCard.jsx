import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'; 

export const ResultCard = ({movie}) => {

        const genra=movie.genre_ids;// array of genres in a movie
        const {addToWatchlist,watchlist}=useContext( GlobalContext);

        let watchlistDisabled= watchlist.find(o => o.id===movie.id) ? true : false ;
        // if true then adding to watchlist is disabled for the current movie else its enabled
        const ButtonName=watchlistDisabled===false ? "Add to watchlist" : "Already in watchlist"

    return (
        
            <div className="result-card">
                <div className="poster-wrapper">
                     {
                      movie.poster_path!=null ? 
                        (
                         <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} poster`} />  
                        ) 
                        :
                        ( <div className="filler-poster"> </div> )
                     }

                </div>

                <div className="info">
                    <div className="header">
                        <h3 className="title">{movie.title}</h3>
                        <h4 className="release-date">{
                            movie.release_date!=null ? 
                        movie.release_date.substring(0,4) : ""
                        }</h4>
                        {/* <ul className="genra">
                            {
                                genra.map( (genre)=> <li className="genre_ele">{genre}</li>   )
                            }
                        </ul> */}

                    </div>
                    <div className="controls">
                        <button className="btn" disabled={watchlistDisabled} onClick={  ()=>{addToWatchlist(movie);} }>
                            {ButtonName}
                        </button>
                    </div>

                </div>

            </div>
        
    )
}
