import React, {createContext, useReducer, useEffect} from 'react';

// initial state
const initialState={
    watchlist:localStorage.getItem('watchlist')? JSON.parse(localStorage.getItem('watchlist')) : [],
    // watchlist:[],
    // watched:[]
    watched:localStorage.getItem('watched')? JSON.parse(localStorage.getItem('watched')) : []
};   

//create context
export const GlobalContext=createContext({});
   

function reducer(state, action){

    let  newState;
    switch(action.type)
    {   
        
        case "ADD_MOVIE": 
            {
                newState=  {    watchlist: [action.payload,...state.watchlist],
                                watched:state.watched
                            };
                break;
            }
        case "REMOVE_MOVIE":
            {
                newState=   {
                                    
                                    watchlist: state.watchlist.filter((movie)=> movie.id!==action.payload  ),
                                    watched:state.watched 
                            };
                break;
            }
        case "ADD_TO_WATCHED":
            {
                newState=   {
                                watchlist: state.watchlist.filter((movie)=> movie.id!==action.payload.id  ),   
                                watched:[action.payload, ...state.watched]
                            }

                break;
            }

        case "ADD_BACK_TO_WATCHLIST":
            {
                newState=   {
                                watchlist: [action.payload, ...state.watchlist],
                                watched:state.watched.filter(  (movie)=>   movie.id!==action.payload.id )       
                            }

                break;
            }
        case "REMOVE_MOVIE_WATCHED":
            {

                newState={
                            watchlist:state.watchlist,
                            watched:state.watched.filter(  (movie)=>   movie.id!==action.payload )       
                        }

                break;
            }

        default: throw new Error();   
        
    }

    return newState;
}

//provider components
export const GlobalProvider = (props)=>{

    const [state,dispatch]=useReducer(reducer, initialState);

        // add movie to watchlist
    const addToWatchlist= (movie)=>{
        dispatch({type:"ADD_MOVIE", payload: movie}); 
    }

    // remove movie from watchlist
    const removeFromWatchlist= (id) =>{

        dispatch({type:"REMOVE_MOVIE", payload: id});
    }

    

    // Add movie to watched list from watchlist
    const addToWatched = (movie)=>{
        dispatch({type:"ADD_TO_WATCHED", payload:movie});
    }

    // Add movie to wathclist back (from watched)
        const addBackToWatchlist = (movie)=>{
            dispatch({type: "ADD_BACK_TO_WATCHLIST", payload: movie});
        }


    // Remove from watched list 
        const removeFromWatchedlist =(id)=>{
            dispatch({type:"REMOVE_MOVIE_WATCHED", payload: id});
        }


        useEffect(()=>{
            localStorage.setItem('watchlist', JSON.stringify(state.watchlist));

            localStorage.setItem('watched', JSON.stringify(state.watched));

        }, [state]);

    return (

        <GlobalContext.Provider value={ {watchlist: state.watchlist , watched:state.watched, addToWatchlist, removeFromWatchlist, addToWatched, addBackToWatchlist, removeFromWatchedlist }  }>
                {props.children}
        </GlobalContext.Provider>
    )

}
