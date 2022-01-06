import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalProvider'; 

export const ResultCard = ({movie}) => {

        const genra=movie.genre_ids;// array of genres in a movie
        const {addToWatchlist, addToWatched,watchlist, watched}=useContext( GlobalContext);


            let inWatchlist= watchlist.find(o=> o.id===movie.id) ? true : false ;
            let inWatched= watched.find(o=> o.id===movie.id) ? true : false ;
        
        let watchlistDisabled=( inWatched || inWatchlist );
        // if true then AddToWatchlist button is disabled for the current movie,  else its enabled
        //i.e. agar koi movie watched/watchlist kisi mein bhi ho gaya , woh dono button ko disable kar dega

        const ButtonName1= (watchlistDisabled===false) ? "Add to Watchlist" : 
        // Do find karenge yahan to see ki current movie in search bar kahan hai in watchlist or watched list
        ( inWatched===true  ? "Added in watched" : ( inWatchlist===true ? "Added in watchlist" : "") );

            
        // const ButtonName2= (watchlistDisabled===false) ? "Add to watched" : 
        // // Do find karenge yahan to see ki current movie in search bar kahan hai in watchlist or watched list
        // ( inWatched===true  ? "Added in watched" : ( inWatchlist===true ? "Added in watchlist" : "") );

            const ButtonName2="Add to Watched";
        

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
                            {ButtonName1}
                        </button>

                        {
                        (watchlistDisabled===false) ?
                        <button className="btn" disabled={watchlistDisabled} onClick={  ()=>{addToWatched(movie);} }>
                            {ButtonName2}
                        </button>
                        : null
                        }

                    </div>

                </div>

            </div>
        
    )
}
