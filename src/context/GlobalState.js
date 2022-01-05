import React, {createContext, useReducer, useEffect} from 'react';

// initial state
const initialState={
    watchlist:localStorage.getItem('watchlist')? JSON.parse('watchlist') : [],
    watched:localStorage.getItem('watched')? JSON.parse('watched') : []
};   

//create context
export const GlobalContext=createContext({});

// export GlobalContext;    

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
        default: throw new Error();   
    }

    return newState;
}

//provider components
export const GlobalProvider = (props)=>{

    const [state,dispatch]=useReducer(reducer, initialState);

    const addToWatchlist= (movie)=>{
        dispatch({type:"ADD_MOVIE", payload: movie});
    }

        useEffect(()=>{
            localStorage.setItem('watchlist', JSON.stringify(state.watchlist));

            localStorage.setItem('watched', JSON.stringify(state.watched));

        }, [state]);

    return (

        <GlobalContext.Provider value={ {watchlist: state.watchlist , watched:state.watched, addToWatchlist }   }>
                {props.children}
        </GlobalContext.Provider>
    )

}