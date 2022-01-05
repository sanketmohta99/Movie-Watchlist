import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Watchlist=()=>{

    const {watchlist}= useContext(GlobalContext);
    
 

    return (

        <div>
            <h1>WATCHLIST</h1>
            {watchlist.map ( (movie)=>
            <h2 key={movie.id} >
                {movie.title}
            </h2>
            )};
        </div>


    )
}